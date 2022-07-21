import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import ProductsContextProvider from "./Contexts/ProductsContext";
import AuthContextProvider from "./Contexts/AuthContext";
import CommentContextProvider from "./Contexts/CommentContext";

function App() {
    return (
        <CommentContextProvider>
        <AuthContextProvider>
            <ProductsContextProvider>
                <BrowserRouter>
                    <Header/>
                    <Routing/>
                    <Footer/>
                </BrowserRouter>
            </ProductsContextProvider>
        </AuthContextProvider>
        </CommentContextProvider>
    );
}

export default App;
