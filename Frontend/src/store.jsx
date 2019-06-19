import { createStore } from "redux";
import DATA from "./data.jsx";

let reducer = (state, action) => {
  if (action.type === "found") {
    return { ...state, find: true, search: action.search };
  }
  if (action.type === "all") {
    return { ...state, search: "" };
  }
  return state;
};

let store = createStore(
  reducer,
  {
    stocks: DATA,
    search: "",
    find: undefined
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
