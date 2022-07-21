import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FavoriteContext } from "../../Contexts/FavoriteContext";
import { productsContext } from "../../Contexts/ProductsContext";

const Favorites = () => {
  const { toggleFavorites, getFavorites, favorite, favoritesPages } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getFavorites();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);
  console.log(favorite);
  return (
    <div>
      {/* <div display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        {favorites.products.map(item => (
          // <div  />
          <div key={item.item.id}>
            <p>{item.item.title}</p>
          </div>
        ))}
      </div> */}
      {/* {favorite.results.map(item => (
        <div key={item.item.id}>
          <p>p</p>
        </div>
      ))} */}
      {/* <p>{favorite.favorite.map(item => console.log(item))}</p> */}
      {/* <p>{item.item.title}</p>  */}

      <div display={"flex"} justifyContent={"center"}>
        <Pagination
          count={favoritesPages}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          variant="outlined"
          color="primary"
        />
      </div>
    </div>
  );
};

export default Favorites;
