import { createContext, useReducer, FC } from "react";
import Post from "../models/Post";

interface InitState {
  posts?: Post[];
  post?: Post;
}

type ActionType = {
  type: "";
  payload: Post;
};

const initState: InitState = {
  posts: [],
  post: {
    id: 0,
    title: "",
    category: "",
    content: "",
    tags: [],
  },
};

// REDUCER
function reducer(state: InitState, action: ActionType) {
  switch (action.type) {
    default:
      return state;
  }
}

export const PostContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initState, dispatch: () => null });

export const PostProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
