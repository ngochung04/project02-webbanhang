import React, { FC, memo } from "react";
import Product from "../../models/Product";

interface Props {
  product: Product;
  handleDelete: (product: Product) => () => void;
  handleChange: (
    product: Product
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProductCart: FC<Props> = ({ product, handleDelete, handleChange }) => {
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

export default memo(ProductCart);
