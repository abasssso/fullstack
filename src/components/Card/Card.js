import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct, toggleLike, toggleFavorites, deleteImage } =
    useContext(productsContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div>
        {item.images.map(img => (
          <div key={img.id}>
            <IconButton onClick={() => deleteImage(img.id)}>
              <CloseIcon />
            </IconButton>
            <img src={img.image} alt="bike" width="300px" />
          </div>
        ))}
        <div
          style={{
            display: "flex",
          }}>
          Title:{item.title} <br />
          Price: ${item.price} <br />
          Category: {item.category} <br />
          Size: {item.size} <br />
          Brand: {item.brand} <br />
          {/*Reviews: {item.reviews.length} <br/>*/}
          Likes: {item.likes} <br />
        </div>
        <div>
          <IconButton onClick={() => deleteProduct(item.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
            <EditIcon />
          </IconButton>
          <IconButton>

          </IconButton>
        </div>
        <div>Description:{item.description}</div>
      </div>
    </div>
  );
};

export default Card;
