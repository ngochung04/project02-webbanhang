import { FC, useContext } from "react";
import { StateContext } from "../../store/StateProvider";
import ProductCart from "./ProductCart";
import TotalCart from "./TotalCart";

const Cart: FC = () => {
  const { state } = useContext(StateContext);
  const { carts } = state;
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
                  {carts
                    ? carts.map((product) => <ProductCart product={product} />)
                    : null}
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
