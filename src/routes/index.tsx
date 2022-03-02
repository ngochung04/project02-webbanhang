import * as React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/HomePage"));
const ReviewPage = React.lazy(() => import("../pages/PostPage"));
const DetailReview = React.lazy(() => import("../pages/DetailReviewPage"));
const Cart = React.lazy(() => import("../pages/CartPage"));

const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<ReviewPage />} />
        <Route path="post/:category/:slug" element={<DetailReview />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
