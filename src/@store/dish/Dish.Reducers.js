import { DishActionTypes } from "../redux/actionTypes";

const initial_state = {
  dishes:[]
};

const dish__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case DishActionTypes.GETDISH_START: {
      return {
        ...state,
      };
    }
    case DishActionTypes.GETDISH_SUCCESS: {
      return {
        ...state,
        dishes:action.payload.data
      };
    }
    case DishActionTypes.GETDISH_FAIL: {
      return {
        state: action.payload,
      };
    }

    case DishActionTypes.DISHCREATE_START: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHCREATE_SUCCESS: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHCREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case DishActionTypes.DISHEDIT_START: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHEDIT_SUCCESS: {
        return {
          ...state,
        }
      }
      case DishActionTypes.DISHEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case DishActionTypes.DISHDELETE_START: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHDELETE_SUCCESS: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case DishActionTypes.DISHDRAG_START: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHDRAG_SUCCESS: {
        return {
          ...state,
        };
      }
      case DishActionTypes.DISHDRAG_FAIL: {
        return {
          state: action.payload,
        };
      }

    default: {
      return state;
    }
  }
};
export default dish__Reducer;