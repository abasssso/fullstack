import React, { useReducer } from "react";
export const FavoriteContext = React.createContext();
const INIT_STATE = {
  favorites: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    const isProductInFavorites = favorites.products.some(
      item => item.item.id === newProduct.item.id
    );
    if (isProductInFavorites) {
      favorites.products = favorites.products.filter(
        item => item.item.id !== newProduct.item.id
      );
    } else {
      favorites.products.push(newProduct);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }
  function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    favorites.totalPrice = favorites.products.reduce((prev, curr) => {
      // console.log(prev);
      return prev + curr.subPrice;
    }, 0);

    dispatch({
      type: "GET_FAVORITES",
      payload: favorites,
    });
    console.log(favorites);
  }
  function deleteFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    favorites.products = favorites.products.filter(item => item.item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }
  function checkProductInFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    const isProductInFavorites = favorites.products.some(
      item => item.item.id === id
    );
    return isProductInFavorites;
  }
  function changeCount(count, id) {
    if (count <= 0) {
      return;
    }
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.products = favorites.products.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }
  return (
    <FavoriteContext.Provider
      value={{
        favorites: state.favorites,
        count: state.count,
        getFavorites,
        addToFavorites,
        deleteFromFavorites,
        changeCount,
        checkProductInFavorites,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
