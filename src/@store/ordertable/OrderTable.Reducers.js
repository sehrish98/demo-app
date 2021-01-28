import { ordertabletypes } from "../redux/actionTypes";

const initial_state = {
  ordertable:[]
};

const ordertable__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case ordertabletypes.GETORDERTABLE_START: {
      return {
        ...state,
      };
    }
    case ordertabletypes.GETORDERTABLE_SUCCESS: {
      return {
        ...state,
        ordertable:action.payload
      };
    }
    case ordertabletypes.GETORDERTABLE_FAIL: {
      return {
        state: action.payload,
      };
    }

    case ordertabletypes.ORDERTABLECREATE_START: {
        return {
          ...state,
        };
      }
      case ordertabletypes.ORDERTABLECREATE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case ordertabletypes.ORDERTABLECREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case ordertabletypes.ORDERTABLEEDIT_START: {
        return {
          ...state,
        };
      }
      case ordertabletypes.ORDERTABLEEDIT_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case ordertabletypes.ORDERTABLEEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case ordertabletypes.ORDERTABLEDELETE_START: {
        return {
          ...state,
        };
      }
      case ordertabletypes.ORDERTABLEDELETE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case ordertabletypes.ORDERTABLEDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

    default: {
      return state;
    }
  }
};
export default ordertable__Reducer;