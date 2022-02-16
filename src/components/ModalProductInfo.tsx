import { Modal, Alert, ModalBody, Button } from "react-bootstrap";
import { FC, useContext } from "react";
import Product from "../models/Product";
import { StateContext } from "../store/StateProvider";

interface Props {
  isShowModalInfo: boolean;
  handleCloseModalInfo: () => void;
  convertToMoney: (price: number) => string;
  product: Product;
}

const ModalProductInfo: FC<Props> = ({
  product,
  handleCloseModalInfo,
  isShowModalInfo,
  convertToMoney,
}) => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <Modal
      show={isShowModalInfo}
      onHide={handleCloseModalInfo}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBody className="row">
        <div className="col-6">
          <img src={product.image} alt="preview product" width={500} />
        </div>
        <div className="col-6 d-flex flex-column">
          <h4>{product.name}</h4>
          <Alert variant="secondary" className="h3 text-danger">
            {convertToMoney(product.price)}
          </Alert>
          <p>Mô tả:</p>
          <p className="text-break">{product.description}</p>
          <Button
            variant="danger"
            className="mt-auto"
            onClick={function () {
              dispatch({ type: "ADD_CART", payload: product });
            }}
          >
            Add to cart
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalProductInfo;
