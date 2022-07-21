import { Box, Button, Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/ProductsContext";
import TextField from "@mui/material/TextField";
import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    getCategories,
    categories,
    createProduct,
    getSize,
    sizes,
    brands,
    getBrand,
    images,
    getImage,
  } = useContext(productsContext);
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

  useEffect(() => {
    getSize();
  }, []);

  useEffect(() => {
    getImage();
  }, []);
  useEffect(() => {
    getBrand();
  }, []);

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
      <div>Add Product</div>
      <div>
        <Container xs={{ maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiTextField-root": { width: "30%" },
            }}>
            <TextField
              margin="dense"
              value={title}
              onChange={e => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
            />
            <TextField
              margin="dense"
              value={description}
              onChange={e => setDescription(e.target.value)}
              label="Description"
              variant="outlined"
            />
            <TextField
              margin="dense"
              value={price}
              onChange={e => setPrice(e.target.value)}
              label="price"
              variant="outlined"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}>
            <select
              className="add_select"
              onChange={e => setSize(e.target.value)}>
              {sizes.map(items => (
                <option value={items.id}>{items.inch}</option>
              ))}
            </select>
            <select
              className="add_select"
              onChange={e => setBrand(e.target.value)}>
              {brands.map(pam => (
                <option key={pam.id} value={pam.slug}>
                  {pam.slug}
                </option>
              ))}
            </select>
            <select
              className="add_select"
              onChange={e => setCategory(e.target.value)}>
              {categories.map(item => (
                <option key={item.id} value={item.slug}>
                  {item.slug}
                </option>
              ))}
            </select>
          </Box>
          <input
            accept="image/*"
            key={image.id}
            multiple
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />

          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
              margitTop: "10px",
            }}
            color="success"
            onClick={handleSave}>
            Save
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;
