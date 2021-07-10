import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: [],
  progress: false,
};

const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";

const CUSTOMER_CREATE_ACTION_TYPE = "CUSTOMER_CREATE_ACTION_TYPE";

const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";

// const CUSTOMER_UPDATE_RENDER_ACTION_TYPE = "CUSTOMER_UPDATE_RENDER_ACTION_TYPE";

export const getAllCustomerAction = () => {
  return async (dispatch) => {
    // API CALL
    const url = `http://localhost:8080/customer/allcustomer`;
    const response = await axios.get(url);

    console.log(response);

    // UI UPDATE
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

// export const updateRenderAction = (payload) => {

//   return { type: CUSTOMER_UPDATE_RENDER_ACTION_TYPE, payload: payload };
// };

export const cretaeCustomerAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/customer/customers`;
    await axios.post(url, payload);

    // updating the ui.
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };

    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    // case CUSTOMER_UPDATE_RENDER_ACTION_TYPE:
    //   // 6
    //   return { ...state, uref: action.payload };

    default:
      return state;
  }
}

// MIDDLEWARE FOR THE ASYNC OPOERATION
const store = createStore(CustomerReducer, applyMiddleware(thunk));
export { store };
