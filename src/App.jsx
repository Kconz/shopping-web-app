import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer";
import AllCart from "./Components/AllCart";
import Products from "./Components/Products";
import { useCartContext } from "./CartContext/CartContext";

function App() {
  const [addToCart, SetAddToCart] = useState([]);
  const products = useCartContext();
  const dataProducts = products.products;

  const onAdd = useCallback((product) => {
    //find the same product 
    const existingItem = addToCart.find(item => item.id === product.id);
    //if product already exist
    if (existingItem) {
      SetAddToCart(
        addToCart.map((item) => {
          if (item.id === existingItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      SetAddToCart([...addToCart, {...product, quantity: 1 }])
    }
    // console.log(existingItem);
  });
  const onRemove = (targetItem) => {
    SetAddToCart(addToCart.filter((item) => item.id !== targetItem.id));
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={<Products dataProducts={dataProducts} onAdd={onAdd} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/shopping-cart"
            element={<AllCart onRemove={onRemove}  onAdd={onAdd} addToCart={addToCart}/>}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
