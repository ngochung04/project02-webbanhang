import { FC, useContext } from "react";
import ProductCart from "../../components/cart/ProductCart";
import TotalCart from "../../components/cart/TotalCart";
import { CartContext } from "../../store/CartProvider";

const Cart: FC = () => {
  const { state } = useContext(CartContext);
  const { products } = state;
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th
                      scope="col"
                      className="text-right d-none d-md-block"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product, index) => (
                    <ProductCart product={product} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <TotalCart />
      </div>
    </div>
  );
};

export default Cart;
