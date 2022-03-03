import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./store/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./store/PostProvider";
import { ProductsProvider } from "./store/ProductsProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ProductsProvider>
      <CartProvider>
        <PostProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PostProvider>
      </CartProvider>
    </ProductsProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
