import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
