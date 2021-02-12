import { checkoutactiontypes } from "../redux/actionTypes";

const initial_state = {
checkout:[]
};

const checkout__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case checkoutactiontypes.CHECKOUT_START: {
      return {
        ...state,
      };
    }
    case checkoutactiontypes.CHECKOUT_SUCCESS: {
      return {
        ...state,
        menu:action.payload
      };
    }
    case checkoutactiontypes.CHECKOUT_FAIL: {
      return {
        state: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default checkout__Reducer;