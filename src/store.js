import { createStore } from "redux";
import rootReducer from "./reducers/index";

const getDataLocal = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return {
    todos,
  };
};

const initialState = getDataLocal();

const store = createStore(rootReducer, initialState);

export default store;
