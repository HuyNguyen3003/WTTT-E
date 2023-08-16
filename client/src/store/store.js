import { createStore } from "redux";

// Định nghĩa reducer

const initialState = {
  count: 0,
  product: {},
  page: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, product: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Tạo Redux store
const store = createStore(reducer);

export default store;
