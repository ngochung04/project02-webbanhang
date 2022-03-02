import { FC, useCallback, useContext } from "react";
import ProductCart from "../../components/cart/ProductCart";
import TotalCart from "../../components/cart/TotalCart";
import Product from "../../models/Product";
import { CartContext } from "../../store/CartProvider";

const Cart: FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;

  const handleDelete = useCallback(
    (product: Product) => () => {
      dispatch({
        type: "REMOVE_CART",
        payload: product,
      });
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (product: Product) => (e: React.ChangeEvent<HTMLInputElement>) => {
      product.quantity = parseInt(e.target.value);
      dispatch({
        type: "CHANGE_QUANTITY_CART",
        payload: product,
      });
    },
    [dispatch]
  );

  const convertToMoney = useCallback((price: number) => {
    return price.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });
  }, []);
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
                    <ProductCart
                      product={product}
                      handleDelete={handleDelete}
                      handleChange={handleChange}
                      key={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <TotalCart convertToMoney={convertToMoney} />
      </div>
    </div>
  );
};

export default Cart;
