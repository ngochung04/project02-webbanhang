import * as React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/HomePage"));
const ReviewPage = React.lazy(() => import("../pages/PostPage"));
const Cart = React.lazy(() => import("../pages/CartPage"));

const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<ReviewPage />}>
          <Route path="/post/:category" element={<ReviewPage />}>
            <Route
              path="/post/:category/:slug"
              element={<ReviewPage />}
            ></Route>
          </Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </React.Suspense>
  );
};

export default Router;
