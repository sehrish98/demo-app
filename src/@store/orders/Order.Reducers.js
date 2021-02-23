import { orderactiontypes } from "../redux/actionTypes";

const initial_state = {
  orders:[]
};

const order__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case orderactiontypes.GETORDER_START: {
      return {
        ...state,
      };
    }
    case orderactiontypes.GETORDER_SUCCESS: {
      return {
        ...state,
        orders:action.payload.data
      };
    }
    case orderactiontypes.GETORDER_FAIL: {
      return {
        state: action.payload,
      };
    }


    case orderactiontypes.GETORDERDETAIL_START: {
        return {
          ...state,
        };
      }
      case orderactiontypes.GETORDERDETAIL_SUCCESS: {
        return {
          ...state,
          orders:action.payload.data
        };
      }
      case orderactiontypes.GETORDERDETAIL_FAIL: {
        return {
          state: action.payload,
        };
      }
  
      case orderactiontypes.GETORDERREVENUE_START: {
        return {
          ...state,
        };
      }
      case orderactiontypes.GETORDERREVENUE_SUCCESS: {
        return {
          ...state,
          orders:action.payload.data
        };
      }
      case orderactiontypes.GETORDERREVENUE_FAIL: {
        return {
          state: action.payload,
        };
      }
  

      case orderactiontypes.ORDERTABLEEDIT_SUCCESS: {
        return {
          ...state,
          orders:action.payload.data
        };
      }
      case orderactiontypes.ORDERTABLEEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }


    default: {
      return state;
    }
  }
};
export default order__Reducer;