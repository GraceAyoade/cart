import React from "react";
import { ShoppingCart } from "./components/ShoppingCart";
import CartProvider from "./utils/cartContext";
import { ItemList } from "./components/ItemList";

// Pages
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <CartProvider>
      <ItemList />
      <ShoppingCart />
    </CartProvider>
  );
};

export default App;
