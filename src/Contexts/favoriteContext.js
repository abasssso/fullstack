import React, { createContext, useReducer } from "react";
export const FavouriteContext = createContext();
const INIT_STATE = {
  favorites: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

const FavouriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
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
      };
    }
    dispatch({
      type: "GET_FAVORITES",
      payload: favorites,
    });
  }
  function deleteFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
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
      };
    }
    const isProductInFavorites = favorites.products.some(
      item => item.item.id === id
    );
    return isProductInFavorites;
  }
  return (
    <FavouriteContext.Provider
      value={{
        favorites: state.fav,
        getFavorites,
        addToFavorites,
        deleteFromFavorites,
        checkProductInFavorites,
      }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
