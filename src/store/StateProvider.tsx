import { createContext, useReducer } from "react";
import Product from "../models/Product";

interface State {
  products: Product[];
  product: Product;
}

type ActionType = { type: ""; payload: State };

const initState: State = {
  products: [],
  product: {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: "",
  },
};

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
}

const StateContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const StateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};
