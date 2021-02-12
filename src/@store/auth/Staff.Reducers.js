import { StaffActionTypes } from "../redux/actionTypes";

const initial_state = {
  staff:[]
}

const staff__Reducer = function (state = initial_state, action) {
  switch (action.type) {

    case StaffActionTypes.GET_STAFF_START: {
        return {
          ...state,
        };
      }
      case StaffActionTypes.GET_STAFF_SUCCESS: {
        return {
          ...state,
          staff:action.payload.data
        };
      }
      case StaffActionTypes.GET_STAFF_FAIL: {
        return {
          state: action.payload,
        };
      }

    case StaffActionTypes.CREATE_STAFF_START: {
      return {
        ...state,
      };
    }
    case StaffActionTypes.CREATE_STAFF_SUCCESS: {
      return {
        ...state,
      };
    }
    case StaffActionTypes.CREATE_STAFF_FAIL: {
      return {
        state: action.payload,
      };
    }

    case StaffActionTypes.LOGIN_STAFF_START: {
      return {
        ...state,
      };
    }
    case StaffActionTypes.LOGIN_STAFF_SUCCESS: {
      return {
        ...state,
      };
    }
    case StaffActionTypes.LOGIN_STAFF_FAIL: {
      return {
        ...state,
      };
    }

    case StaffActionTypes.LOGOUT_STAFF_START: {
      return {
        ...state
      };
    }
    case StaffActionTypes.LOGOUT_STAFF_SUCCESS: {
      return {
      staff:[]
      };
    }
    case StaffActionTypes.LOGOUT_STAFF_FAIL: {
      return {
        ...state,
      };
    }
    case StaffActionTypes.STAFF_CHANGE_PASSWORD_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case StaffActionTypes.STAFF_CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case StaffActionTypes.STAFF_CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case StaffActionTypes.DELETE_STAFF_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case StaffActionTypes.DELETE_STAFF_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case StaffActionTypes.DELETE_STAFF_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default staff__Reducer;