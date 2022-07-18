import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}

const API = "https://thawing-brook-92190.herokuapp.com/?format=openapi";

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
      const res = await axios(`${API}/products/`, config);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
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
      const res = await axios(`${API}/category/list`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: Authorization,
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: Authorization,
      };
      await axios.delete(`${API}/products/${id}`, config);
      getProducts();
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
        getProducts,
        getCategories,
        createProduct,
        deleteProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
