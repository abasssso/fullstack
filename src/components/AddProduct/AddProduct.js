import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../Contexts/ProductsContext";


const AddProduct = () => {
    const navigate = useNavigate();
    const {getCategories, categories, createProduct,getSize,sizes,brands,getBrand,images,getImage} =
        useContext(productsContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");


    useEffect(() => {
        getCategories();
    }, []);

    useEffect(()=>{
        getSize()
    },[])

    useEffect(() => {
        getImage()
    },[])
    useEffect(()=>{
        getBrand()
    },[])

    // console.log(categories)

    function handleSave() {
        let newProduct = new FormData();
        newProduct.append("title", title);
        newProduct.append("description", description);
        newProduct.append("price", price);
        newProduct.append("category", category);
        newProduct.append("images", image);
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
                <select onChange={e => setSize(e.target.value)}>
                    {sizes.map(items => (
                        <option value={items.id}>{items.inch}</option>
                    ))}
                </select>
                <select onChange={e => setBrand(e.target.value)}>
                    {brands.map(pam => (
                        <option key={pam.id} value={pam.slug}>{pam.slug}</option>
                    ))}
                </select>
                <select onChange={e => setCategory(e.target.value)}>
                    {categories.map(item => (
                        <option key={item.id} value={item.slug}>{item.slug}</option>
                    ))}
                </select>
                <input
                    accept="image/*"
                    key={image.id}
                    multiple
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <button onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
