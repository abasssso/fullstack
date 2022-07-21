import React, { createContext, useReducer } from "react";
export const FavouriteContext = createContext();
const INIT_STATE = {
  fav: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        fav: action.payload,
      };
    default:
      return state;
  }
}

const FavouriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addToFav(product) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
      subPrice: product.price,
    };
    const isProductInFav = fav.products.some(
      item => item.item.id === newProduct.item.id
    );
    if (isProductInFav) {
      fav.products = fav.products.filter(
        item => item.item.id !== newProduct.item.id
      );
    } else {
      fav.products.push(newProduct);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  function getFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }
    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  }
  function deleteFromFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }
    fav.products = fav.products.filter(item => item.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }
  function checkProductInFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }
    const isProductInFav = fav.products.some(item => item.item.id === id);
    return isProductInFav;
  }
  return (
    <FavouriteContext.Provider
      value={{
        fav: state.fav,
        getFav,
        addToFav,
        deleteFromFav,
        checkProductInFav,
      }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
