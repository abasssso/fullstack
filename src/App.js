import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import ProductsContextProvider from "./Contexts/ProductsContext";
import AuthContextProvider from "./Contexts/AuthContext";
import CartContextProvider from "./Contexts/CartContext";
import FavouriteContextProvider from "./Contexts/favoriteContext";

function App() {
  return (
    <FavouriteContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </FavouriteContextProvider>
  );
}

export default App;
