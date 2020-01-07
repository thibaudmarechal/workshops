import { createStore } from "redux";

const initialState = {
  searchQuery: "",
  min: 0,
  max: 100000,
  checked: "",
  advanced: "none",
  tags: []
};

let reducer = (state, action) => {
  if (action.type === "QUERY") {
    return { ...state, searchQuery: action.payload };
  }
  if (action.type === "MIN_PRICE") {
    return { ...state, min: action.payload };
  }
  if (action.type === "MAX_PRICE") {
    return { ...state, max: action.payload };
  }
  if (action.type === "CHECKED") {
    return { ...state, checked: action.payload };
  }
  if (action.type === "CLEAR") {
    return { ...initialState };
  }
  if (action.type === "ADVANCED") {
    return { ...state, advanced: "block" };
  }

  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
