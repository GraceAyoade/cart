import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ShoppingCart } from "./components/ShoppingCart";
import CartProvider from "./components/Cart";

// Pages
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  );
};

export default App;
