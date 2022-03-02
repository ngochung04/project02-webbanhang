import { FC, useContext, memo, useMemo } from "react";
import { CartContext } from "../../store/CartProvider";
interface Props {
  convertToMoney: (price: number) => string;
}

const TotalCart: FC<Props> = ({ convertToMoney }) => {
  const { state } = useContext(CartContext);
  const { products } = state;

  const totalPrice = useMemo(() => {
    return convertToMoney(
      products?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0
    );
  }, [products, convertToMoney]);

  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
          <dl className="dlist-align">
            <dt>Total price:</dt>
            <dd className="text-right ml-3">{totalPrice}</dd>
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
              <strong>{totalPrice}</strong>
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

export default memo(TotalCart);
