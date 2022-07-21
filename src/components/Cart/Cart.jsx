import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { CartContext } from "../../Contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(CartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <div>
      <div>
        {cart.products.map(item => (
          <div className="container-cart" key={item.item.id}>
            <p>{item.item.description}</p>
            <h1>{item.item.title}</h1>
            {item.item.images.map(elem => (
              <img className="cart-img" src={elem.image} alt="" />
            ))}
            <p>${item.item.price}</p>
            <IconButton
              onClick={() => changeCount(item.count + 1, item.item.id)}>
              <AddIcon />
            </IconButton>
            {item.count}
            <IconButton
              onClick={() => changeCount(item.count - 1, item.item.id)}>
              <RemoveIcon />
            </IconButton>
            <p>${item.subPrice}</p>
            <IconButton onClick={() => deleteFromCart(item.item.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/details/${item.item.id}`)}>
              <InfoIcon />
            </IconButton>
          </div>
        ))}
        <p>total:{cart.totalPrice}$</p>
        <button onClick={() => navigate("/payment")}>order</button>
      </div>
    </div>
  ) : (
    <h1>load</h1>
  );
};

export default Cart;
