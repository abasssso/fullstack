import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {productsContext} from "../../Contexts/ProductsContext";

const EditProduct = ({pov}) => {

    const {id} = useParams()

    const navigate = useNavigate()

    const {
        getCategories,
        categories,
        getOneProduct,
        oneProduct,
        updateProduct,
        getSize,
        getBrand,
        getProducts,
        sizes,
        brands,
    } = useContext(productsContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [images, setImages] = useState("");

    useEffect(() => {
        getCategories();
        getOneProduct(id);
        getSize();
        getBrand();
        getProducts();
    }, []);

    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title);
            setDescription(oneProduct.description);
            setPrice(oneProduct.price);
            setSize(oneProduct.size.id);
            setImages(oneProduct.images.image);
            setBrand(oneProduct.brand.id);
            setCategory(oneProduct.category.id);
        }
    }, [oneProduct]);

    function handleSave() {
        let editedProduct = new FormData();
        editedProduct.append("title", title);
        editedProduct.append("description", description);
        editedProduct.append("price", price);
        editedProduct.append("category", category);
        editedProduct.append("size", size);
        editedProduct.append("brand", brand);
        if (images) {
            editedProduct.append("image", images);
        }
        updateProduct(id, editedProduct, navigate);
    }

    return (
        <div>
            <div>
                EDIT PRODUCT
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
                    multiple
                    type="file"
                    onChange={e => setImages(e.target.files[0])}
                />
                <div>
                    {console.log(images)}
                </div>
                <button onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditProduct;
