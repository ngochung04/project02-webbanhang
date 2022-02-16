import { FC, Dispatch, SetStateAction } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Props {
  products: Product[];
  setProduct: Dispatch<SetStateAction<Product>>;
  convertToMoney: (price: number) => string;
  handleShowModalInfo: () => void;
}

const ListProducts: FC<Props> = ({
  products,
  setProduct,
  convertToMoney,
  handleShowModalInfo,
}) => {
  const handleClick = (product: Product) => {
    setProduct(product);
    handleShowModalInfo();
  };

  return (
    <div className="row pt-5 m-3">
      {products.map((product) => (
        <div className="col-2 mb-3" key={product.id}>
          <div className="card">
            <img src={product.image} className="rounded" alt="..." />
            <div className="card-body">
              <p className="card-title text-truncate">{product.name}</p>
              <p className="text-right text-danger ">
                {convertToMoney(product.price)}
              </p>
              <button
                className="btn btn-danger"
                onClick={function () {
                  handleClick(product);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
