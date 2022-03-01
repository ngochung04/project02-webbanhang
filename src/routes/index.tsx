import * as React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/HomePage"));
const Category = React.lazy(() => import("../pages/CategoryPage"));
const Cart = React.lazy(() => import("../pages/CartPage"));

const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </React.Suspense>
  );
};

export default Router;
