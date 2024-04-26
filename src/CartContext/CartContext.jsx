import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../Data/Data";
import CartReducer from "../CartReducer/CartReducer";

const CartContext = createContext();
// state cart
const initState = {
  products: products
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);

  
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
