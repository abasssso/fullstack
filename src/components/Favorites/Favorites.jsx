import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import Card from "../Card/Card";

const Favorites = () => {
  const { toggleFavourites } = useContext(productsContext);
  const { getFavorites, favorites, favoritesPages } =
    useContext(productsContext);
  // useEffect(() => {
  //   getFavorites();
  // }, []);
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
  return (
    <Container>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        {favorites.map(item => (
          // <div  />
          <div key={item.id}>{item.item.title}</div>
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        ff
        <Pagination
          count={favoritesPages}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default Favorites;
