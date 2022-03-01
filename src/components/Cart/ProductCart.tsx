import { FC, useContext } from "react";
import Product from "../../models/Product";
import { StateContext } from "../../store/StateProvider";
interface Cart {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
interface Props {
  product: Cart;
}
const ProductCart: FC<Props> = ({ product }) => {
  const { dispatch } = useContext(StateContext);
  const handleDelete = (product: Product) => () => {
    dispatch({
      type: "REMOVE_CART",
      payload: product,
    });
  };
  return (
    <tr key={product.id}>
      <td>
        <div className="col-6 d-inline">
          <img src={product.image} className="img-sm" width={100} alt="..." />
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
        <button className="btn btn-danger" onClick={handleDelete(product)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductCart;
