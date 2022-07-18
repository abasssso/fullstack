import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../Contexts/ProductsContext";
import {
    Box, FormControl,
    IconButton, InputLabel, Select,
    Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {PhotoCamera} from "@mui/icons-material";

const AddProduct = () => {
    const navigate = useNavigate();
    const { getCategories, categories, createProduct } =
        useContext(productsContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState(null);
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");

    // useEffect(() => {
    //     getCategories();
    // }, []);

    function handleSave() {
        let newProduct = new FormData();
        newProduct.append("title", title);
        newProduct.append("description", description);
        newProduct.append("price", price);
        newProduct.append("category", category);
        newProduct.append("images", images);
        newProduct.append("size", size);
        newProduct.append("brand", brand);
        createProduct(newProduct, navigate);
    }
    return (
        <div>
            <div>
                Add Product
            </div>
            <div>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    type="text"/>
                    <input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                    type="text"/>
                    <input
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="price"
                    type="text"/>
                    <input
                    value={size}
                    onChange={e => setSize(e.target.value)}
                    placeholder="size"
                    type="text"/>
                    <input
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    placeholder="brand"
                    type="text"/>
                    <input
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="category"
                    type="text"/>
                    <input
                    value={images}
                    onChange={e => setImages(e.target.value)}
                    placeholder="image"
                    type="file"/>

                <button onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
