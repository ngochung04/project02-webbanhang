import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./store/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./store/PostProvider";
import { ProductsProvider } from "./store/ProductsProvider";

ReactDOM.render(
  // <React.StrictMode>
  <ProductsProvider>
    <CartProvider>
      <PostProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostProvider>
    </CartProvider>
  </ProductsProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
