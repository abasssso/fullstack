import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import StraightenIcon from "@mui/icons-material/Straighten";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Card.css";
import { Add } from "@mui/icons-material";
import { authContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext";
const Card = ({ item }) => {
  const { addToCart, checkProductInCart } = React.useContext(CartContext);
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );
  const navigate = useNavigate();
  const { currentUser } = useContext(authContext);
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
          <div className="card_img" key={img.id}>
            <div className="card">${item.price}</div>
            {item.is_author ? (
              <div>
                <IconButton onClick={() => deleteImage(img.id)}>
                  <CloseIcon
                    className="delete-img-icon"
                    // style={{ position: "absolute" }}
                  />
                </IconButton>
              </div>
            ) : null}

            <img
              style={{ width: "460px" }}
              src={img.image}
              alt="bike"
              width="300px"
            />
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
            <AccountCircleIcon className="product-info_icon" />
            {item.user}
          </div>
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
          <div>
            <IconButton onClick={() => toggleLike(item.id)}>
              <FavoriteBorderIcon
                color={item.is_liked ? "error" : "black"}
                className="product-info_icon"
              />
              {item.like}
            </IconButton>
            {/* <IconButton>
              <BookmarkBorderIcon className="product-info_icon" />
            </IconButton> */}
            <IconButton onClick={() => toggleFavorites(item.id)}>
              {item.is_favorite ? (
                <BookmarkIcon className="product-info_icon" />
              ) : (
                <BookmarkBorderIcon className="product-info_icon" />
              )}
            </IconButton>
            <IconButton
              className="product-info_icon"
              onClick={() => {
                addToCart(item);
                setProductState(checkProductInCart(item.id));
              }}>
              {productState ? (
                <ClearIcon className="product-info_icon" />
              ) : (
                <AddIcon className="product-info_icon" />
              )}
            </IconButton>
          </div>
          {item.is_author ? (
            <div>
              <IconButton onClick={() => deleteProduct(item.id)}>
                <DeleteIcon className="product-info_icon" />
              </IconButton>
              <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
                <EditIcon className="product-info_icon" />
              </IconButton>
            </div>
          ) : null}
          <button
            className="info-btn"
            onClick={() => navigate(`/details/${item.id}`)}>
            MORE ABOUT
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
