import React, {useContext, useState, useEffect} from "react";
import {productsContext} from "../../Contexts/ProductsContext";
import {useNavigate, useSearchParams} from "react-router-dom";
import Card from "../Card/Card";
import { Pagination, Slider } from "@mui/material";
import "./Products.css";
const Products = () => {
    const navigate = useNavigate();
    const {getProducts, products, pages} = useContext(productsContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") ? searchParams.get("search") : "");

    const [currentPage, setCurrentPage] = useState(1);

    const [price, setPrice] = useState([1, 10000]);

    useEffect(() => {
        getProducts();
    }, [searchParams]);

    useEffect(() => {
        setSearchParams({
            page: currentPage,
            search: search,
            price_from: price[0],
            price_to: price[1],
        });
    }, [currentPage, search, price]);

  return (
    <div>
      <div className="container-add">
        <button className="add-btn" onClick={() => navigate("/add")}>
          Add product
        </button>
        <div>
          <input
            className="search-inp"
            value={search}
            onClick={e => setSearch(e.target.value)}
            placeholder="Search "
            type="text"
          />
        </div>
        <div>
          <Slider
            style={{
              width: "500px",
            }}
            transition={"1s"}
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
            step={100}
          />
        </div>
      </div>
      <div>
        {products.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        style={{
          color: "black",
        }}
        page={currentPage}
        onChange={(e, page) => setCurrentPage(page)}
        count={pages}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Products;
