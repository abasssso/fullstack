import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../Contexts/ProductsContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../Card/Card";
import { Pagination, Slider } from "@mui/material";

const Products = () => {
  const navigate = useNavigate();
  const { getProducts, products, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [price, setPrice] = useState([1, 10000]);

  console.log(currentPage);

  useEffect(() => {
    getProducts();
  }, []);
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
  console.log(products);
  return (
    <div>
      <button onClick={() => navigate("/add")}>Add product</button>
      <div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="search..."
          type="text"
        />
      </div>
      <div>
        <input
          value={price}
          onClick={(e, value) => setPrice(e.target.value)}
          type="checkbox"
        />
        <p>1000</p>
      </div>
      <div>
        <Slider
          style={{
            width: "500px",
          }}
          transition={"1s"}
          value={price}
          onChange={(e, value) => {
            setPrice(e.target.value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
          step={100}
        />
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
