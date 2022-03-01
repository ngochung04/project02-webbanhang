import { createContext, useReducer, FC } from "react";
import Product from "../models/Product";

interface InitState {
  products?: Product[];
  product?: Product;
}

type ActionType = {
  type: "ADD_CART" | "REMOVE_CART" | "CHANGE_QUANTITY_CART";
  payload: Product;
};

const initState: InitState = {
  products: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
  },
};

// REDUCER
function reducer(state: InitState, action: ActionType) {
  switch (action.type) {
    case "ADD_CART":
      const addCarts = state.products ?? [];
      let index = addCarts.findIndex((cart) => cart.id === action.payload.id);
      index === -1
        ? addCarts.push({ ...action.payload, quantity: 1 })
        : addCarts[index].quantity++;

      return {
        ...state,
        products: addCarts,
      };

    case "REMOVE_CART":
      return {
        ...state,
        products: state.products?.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case "CHANGE_QUANTITY_CART":
      return {
        ...state,
        products: state.products?.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    // case "INCREASE_PRODUCT_CART":
    //   return;
    default:
      return state;
  }
}

export const CartContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initState, dispatch: () => null });

export const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
