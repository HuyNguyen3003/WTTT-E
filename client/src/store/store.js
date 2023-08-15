import { createStore } from "redux";

// Định nghĩa reducer

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
