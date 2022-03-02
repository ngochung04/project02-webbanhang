import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ListProducts from "../components/ListProducts";
import ModalProductInfo from "../components/ModalProductInfo";
import Product from "../models/Product";
import { ProductsContext } from "../store/ProductsProvider";

const HomePage = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { products = [] } = state;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
    quantity: 0,
  });
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);

  useEffect(() => {
    axios.get("https://jsonblob.com/api/948153349182865408").then((res) =>
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data,
      })
    );
  }, [dispatch]);

  const convertToMoney = (price: number) => {
    return price.toLocaleString("en", {
      style: "currency",
      currency: "USD",
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
