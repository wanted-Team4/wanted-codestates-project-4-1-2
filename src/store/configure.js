import rootReducer from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const confiqureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(compose(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, enhancer);

  return store;
};

const Store = confiqureStore();

export default Store;
