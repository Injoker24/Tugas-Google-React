import React from "react";
import Home from "./Home";
import Wishlist from "./Wishlist";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Wishlist />
      </CartProvider>
    </>
  );
}

export default App;
