import React, { FC, useContext } from "react";
import Product from "../../models/Product";
import { CartContext } from "../../store/CartProvider";

interface Props {
  product: Product;
}
const ProductCart: FC<Props> = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const handleDelete = (product: Product) => () => {
    dispatch({
      type: "REMOVE_CART",
      payload: product,
    });
  };
  const handleChange =
    (product: Product) => (e: React.ChangeEvent<HTMLInputElement>) => {
      product.quantity = parseInt(e.target.value);
      dispatch({
        type: "CHANGE_QUANTITY_CART",
        payload: product,
      });
    };
  return (
    <tr key={product.id}>
      <td>
        <div className="col-6 d-inline">
          <img src={product.image} className="img-sm" width={100} alt="..." />
        </div>
        <div className="col-6 d-inline">{product.title}</div>
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={product.quantity}
          onChange={handleChange(product)}
        />
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">{product.price}</var>
        </div>
      </td>
      <td className="text-right d-none d-md-block">
        <button className="btn btn-danger" onClick={handleDelete(product)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductCart;
