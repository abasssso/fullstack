import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import StraightenIcon from "@mui/icons-material/Straighten";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import "./Card.css";
import { Add } from "@mui/icons-material";
const Card = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct, toggleLike, toggleFavorites, deleteImage } =
    useContext(productsContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container-card">
      <div className="container-card_inner">
        {item.images.map(img => (
          <div key={img.id}>
            <div className="card">${item.price}</div>
            <img
              style={{ width: "460px" }}
              src={img.image}
              alt="bike"
              width="300px"
            />
            <IconButton onClick={() => deleteImage(img.id)}>
              <CloseIcon />
            </IconButton>
          </div>
        ))}
        <div
          className="container-card-inner_product"
          style={{
            display: "flex",
          }}>

          <p>
            A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela
            vem equipada com os melhores acessórios, o que garante maior
            velocidade.
          </p>
          <h1>{item.title}</h1> <br />
          <div className="card-inner-product_info">
            <MenuIcon className="product-info_icon" />
            {item.category}
          </div>
          <div className="card-inner-product_info">
            <StraightenIcon className="product-info_icon" /> {item.size}
          </div>
          <div className="card-inner-product_info">
            <PedalBikeIcon className="product-info_icon" /> {item.brand}
          </div>
          {/* Reviews: {item.reviews.length} */}
          <FavoriteBorderIcon className="product-info_icon" />
          {item.likes}
          <div>
            <IconButton onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </IconButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
