import React, {useContext, useState, useEffect} from "react";
import {productsContext} from "../../Contexts/ProductsContext";
import {useNavigate, useSearchParams} from "react-router-dom";
import Card from "../Card/Card";

const Products = () => {
    const navigate = useNavigate()
    const {getProducts, products, pages} = useContext(productsContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProducts();
    }, [searchParams]);

    useEffect(() => {
        setSearchParams({
            page: currentPage,
        });
    }, [currentPage]);

    return (
        <div>
            <button onClick={() => navigate("/add")}>
                Add product
            </button>
            <div>
                {products.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
};

export default Products;
