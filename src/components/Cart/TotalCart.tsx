import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../store/StateProvider";

const TotalCart = () => {
  const { state } = useContext(StateContext);
  const { carts } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    carts?.map((cart) => {
      return (total += cart.price * cart.quantity);
    });
    setTotal(total);
  }, [carts]);

  const convertToMoney = (price: number) => {
    // console.log("render");
    return price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
          <dl className="dlist-align">
            <dt>Total price:</dt>
            <dd className="text-right ml-3">{convertToMoney(total)}</dd>
          </dl>
          <dl className="dlist-align">
            <dt>Discount:</dt>
            <dd className="text-right text-danger ml-3">
              - {convertToMoney(0)}
            </dd>
          </dl>
          <dl className="dlist-align">
            <dt>Total:</dt>
            <dd className="text-right text-dark b ml-3">
              <strong>{convertToMoney(total)}</strong>
            </dd>
          </dl>
          <hr />
          <a
            href="#/"
            className="btn btn-out btn-success btn-square btn-main mt-2"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
