import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Insurance from "./components/Insurance/Insurance";
import Products from "./components/Products/Products";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Routing;
