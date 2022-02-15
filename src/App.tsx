import { useState, FC, useEffect } from "react";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer";
import ListProducts from "./components/ListProducts";
import axios from "axios";
import Product from "./models/Product";
import ModalProductInfo from "./components/ModalProductInfo";
import { StateProvider } from "./store/StateProvider";

const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
  });
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data));
  }, []);

  const convertToMoney = (price: number) => {
    return price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleShowModalInfo = () => {
    setIsShowModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setIsShowModalInfo(false);
  };

  return (
    <StateProvider>
      <Header />
      <ListProducts
        products={products}
        setProduct={setProduct}
        convertToMoney={convertToMoney}
        handleShowModalInfo={handleShowModalInfo}
      />

      <ModalProductInfo
        product={product}
        isShowModalInfo={isShowModalInfo}
        convertToMoney={convertToMoney}
        handleCloseModalInfo={handleCloseModalInfo}
      />
      <Footer />
    </StateProvider>
  );
};

export default App;