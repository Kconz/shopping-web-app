import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import DataProducts from "./Data/Data";
import Footer from "./Components/Footer";
import AllCart from "./Components/AllCart";

function App() {
  const [count, setCount] = useState(0);
  // const [idProduct, SetIdProduct] = useState("");
  const [idShoppingCart, SetIdShoppingCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={
              <Products
                DataProducts={DataProducts}
                SetIdShoppingCart={SetIdShoppingCart}
                idShoppingCart={idShoppingCart}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/shopping-cart"
            element={
              <AllCart
                idShoppingCart={idShoppingCart}
                DataProducts={DataProducts}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
