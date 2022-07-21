import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  console.log(oneProduct);
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return oneProduct ? (
    <Container>
      <Box>
        <h1>hello</h1>
        {oneProduct.images.map(img => (
          <div key={img.id}>
            <img src={img.image} width="50%" alt="bike" />
          </div>
        ))}
        <p>{`price: ${oneProduct.price}`}</p>
        <p>{`description: ${oneProduct.description}`}</p>
        <p>{`title: ${oneProduct.title}`}</p>

        <p>{`user: ${oneProduct.user}`}</p>

        <p>{`views: ${oneProduct.views}`}</p>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};
export default Details;
