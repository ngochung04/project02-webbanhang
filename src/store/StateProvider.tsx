import { createContext, useReducer, FC } from "react";
import Product from "../models/Product";

interface Cart {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

interface InitState {
  products?: Product[];
  carts?: Cart[];
  product?: Product;
}

type ActionType = {
  type: "ADD_CART" | "REMOVE_CART" | "CHANGE_QUANTITY";
  payload: Product;
};

const initState: InitState = {
  products: [],
  carts: [],
  product: {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
  },
};

// REDUCER
function reducer(state: InitState, action: ActionType) {
  switch (action.type) {
    case "ADD_CART":
      const addCarts = state.carts ?? [];
      if (addCarts.find((cart) => cart.id === action.payload.id)) {
        const index = addCarts.findIndex(
          (cart) => cart.id === action.payload.id
        );
        addCarts[index].quantity += 1;
        return {
          ...state,
          carts: addCarts,
        };
      }
      return {
        ...state,
        carts: [
          ...(state.carts ?? []),
          { ...action.payload, quantity: 1 },
        ] as Cart[],
      };

    case "REMOVE_CART":
      const cart = [...(state.carts ?? [])] as Cart[];
      return {
        ...state,
        carts: cart.filter((product) =>
          product.id !== action.payload.id ? product : null
        ),
      };
    default:
      return state;
  }
}

export const StateContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initState, dispatch: () => null });

export const StateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
