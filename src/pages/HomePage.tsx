import axios from "axios";
import { useEffect, useState } from "react";
import ListProducts from "../components/ListProducts";
import ModalProductInfo from "../components/ModalProductInfo";
import Product from "../models/Product";

const HomePage = () => {
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
      .get("https://jsonblob.com/api/947776146922291200")
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
    <>
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
    </>
  );
};

export default HomePage;
