import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Insurance from "./components/Insurance/Insurance";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import AddProduct from "./components/AddProduct/AddProduct";
import { authContext } from "./Contexts/AuthContext";
import EditProduct from "./components/EditProduct/EditProduct";
import RestorePass from "./components/RestorePass/RestorePass";
import RestoreComplete from "./components/RestoreComplete/RestoreComplete";
import Details from "./components/Details/Details";
import Favorites from "./components/Favorites/Favorites";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <h1>Loading . . .</h1>;
  }
  // console.log(currentUser);
  return (
    <Routes>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="products" replace /> : <Login />}
      />
      <Route path="/restore-pass" element={<RestorePass />} />
      <Route path="/restore-complete" element={<RestoreComplete />} />
      <Route path="/add" element={currentUser ? <AddProduct /> : <Login />} />
      <Route
        path="/register"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Register />
        }
      />
      <Route
        path="/register-success"
        element={
          currentUser ? (
            <Navigate to="/products" replace />
          ) : (
            <RegisterSuccess />
          )
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
