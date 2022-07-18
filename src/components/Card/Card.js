import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../Contexts/ProductsContext";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const Card = ({item}) => {
    const navigate = useNavigate()
    const {deleteProduct, toggleLike, toggleFavorites} = useContext(productsContext)
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <div>
                <img src={item.images.image} alt=""/>
                <div style={{
                    display:"flex",
                }}>
                    Title:{item.title} <br/>
                    Price: ${item.price} <br/>
                    Category: {item.category} <br/>
                    {/*Reviews: {item.reviews.length} <br/>*/}
                    Likes: {item.likes} <br/>
                </div>
                <div>
                    (
                        <>
                            <IconButton onClick={() => deleteProduct(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
                                <EditIcon />
                            </IconButton>
                        </>
                    )
                </div>
                <div>
                    Description:{item.description}
                </div>
            </div>
        </div>
    );
};

export default Card;
