import React, { useContext } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostContext } from "../../store/PostProvider";
import { ProductsContext } from "../../store/ProductsProvider";

const ListReview = () => {
  const { state } = useContext(PostContext);
  const { state: stateProduct } = useContext(ProductsContext);
  const removeSpecialChar = (str: string) => str.replace(/[^a-zA-Z]/g, "-");
  const getNameProduct = (id: number) =>
    stateProduct.products?.find((p) => p.id === id)?.title;

  return (
    <ListGroup as="ul">
      {state.posts.map((post) => (
        <Link
          key={post.id}
          style={{ color: "normal", textDecoration: "none" }}
          to={`${removeSpecialChar(post.category)}/${removeSpecialChar(
            post.title
          )}_${post.id}`}
        >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {getNameProduct(Number(post.product)) + " - " + post.title}
              </div>
              <div className="fs-sm text-truncate">{post.content}</div>
            </div>
            <Badge>{post.category}</Badge>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default ListReview;
