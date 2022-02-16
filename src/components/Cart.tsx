import { FC, useContext } from "react";
import { StateContext } from "../store/StateProvider";

const Cart: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { carts } = state;
  return (
    <div className="container-fluid">
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
                    ? carts.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <div className="col-6 d-inline">
                              <img
                                src={product.image}
                                className="img-sm"
                                width={100}
                              />
                            </div>
                            <div className="col-6 d-inline">{product.name}</div>
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={product.quantity}
                              readOnly
                            />
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">{product.price}</var>
                            </div>
                          </td>
                          <td className="text-right d-none d-md-block">
                            <button
                              className="btn btn-danger"
                              onClick={function () {
                                dispatch({
                                  type: "REMOVE_CART",
                                  payload: product,
                                });
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-right ml-3">$69.97</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-right text-danger ml-3">- $10.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-right text-dark b ml-3">
                  <strong>$59.97</strong>
                </dd>
              </dl>
              <hr />
              <a
                href="#"
                className="btn btn-out btn-success btn-square btn-main mt-2"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
