import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  sizes: [],
  brands: [],
  images: [],
  oneProduct: null,
  favorite: [],
  favoritesPages: 0,
};

function reducer(state = INIT_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 3),
      };
    case "GET_FAVORITES":
      return {
        ...state,
        favorite: action.payload.results,
        favoritesPages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "GET_IMAGES":
      return { ...state, images: action.payload };
    case "GET_SIZES":
      return { ...state, sizes: action.payload };
    case "GET_BRANDS":
      return { ...state, brands: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = "http://18.197.23.213";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      // console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/type/`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
      // console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  async function getSize() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/size/`, config);
      dispatch({
        type: "GET_SIZES",
        payload: res.data.results,
      });
      // console.log(res)
    } catch (err) {
      console.log(err);
    }
  }
  async function getImage() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/images/`, config);
      dispatch({
        type: "GET_IMAGES",
        payload: res.data.results,
      });
      // console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  async function getBrand() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/brand/`, config);
      dispatch({
        type: "GET_BRANDS",
        payload: res.data.results,
      });
      // console.log(res.data.results)
    } catch (err) {
      console.log(err);
    }
  }

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      // console.log(res);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function createComment(newComment, navigate, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/products/${id}/comment/`,
        newComment,
        config
      );
      // console.log(res);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteImage(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/images/${id}/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}/`, config);
      // console.log(res);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateProduct(id, editedProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/products/${id}/`,
        editedProduct,
        config
      );
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function toggleLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}/like/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function toggleFavorites(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}/favorite/`, config);
      getProducts();
      getFavorites();
    } catch (err) {
      console.log(err);
    }
  }

  async function getFavorites() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/favorite/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_FAVORITES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        sizes: state.sizes,
        brands: state.brands,
        favorite: state.favorite,
        oneProduct: state.oneProduct,
        favoritesPages: state.favoritesPages,
        getProducts,
        getCategories,
        getOneProduct,
        toggleLike,
        toggleFavorites,
        updateProduct,
        getSize,
        deleteImage,
        getBrand,
        getImage,
        getFavorites,
        createProduct,
        deleteProduct,
        createComment,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
