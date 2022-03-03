import { FC, useContext, memo, useMemo, useState } from "react";
import { CartContext } from "../../store/CartProvider";
import PromoCode from "./PromoCode";

interface Props {
  convertToMoney: (price: number) => string;
}

const TotalCart: FC<Props> = ({ convertToMoney }) => {
  const { state } = useContext(CartContext);
  const { products } = state;
  const [code, setCode] = useState({
    code: "",
    value: 0,
    type: "",
  });

  const totalPrice = useMemo(() => {
    return (
      products?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0
    );
  }, [products]);

  const discountPrice = useMemo(() => {
    const price = () => {
      if (code.type === "percent") {
        return (totalPrice * code.value) / 100;
      } else if (code.type === "money") {
        return totalPrice - code.value < 0 ? totalPrice : code.value;
      } else {
        return 0;
      }
    };
    return price();
  }, [totalPrice, code]);

  const finalPrice = useMemo(() => {
    return totalPrice - discountPrice;
  }, [totalPrice, discountPrice]);

  
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
              - {convertToMoney(discountPrice)}
            </dd>
          </dl>
          <dl className="dlist-align">
            <dt>Total:</dt>
            <dd className="text-right text-dark b ml-3">
              <strong>{convertToMoney(finalPrice)}</strong>
            </dd>
          </dl>
          <hr />
          <PromoCode code={code} setCode={setCode} />
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
