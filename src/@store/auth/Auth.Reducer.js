import { UserActionTypes } from "../redux/actionTypes";

const initial_state = {
  user:[]
}

const user__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case UserActionTypes.CREATE_USER_START: {
      return {
        ...state,
      };
    }
    case UserActionTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
      };
    }
    case UserActionTypes.CREATE_USER_FAIL: {
      return {
        state: action.payload,
      };
    }

    case UserActionTypes.LOGIN_USER_START: {
      return {
        ...state,
      };
    }
    case UserActionTypes.LOGIN_USER_SUCCESS: {
      const { username, type } = action.payload;
      return {
        ...state,
        username: username,
      };
    }
    case UserActionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
      };
    }

    case UserActionTypes.LOGOUT_USER_START: {
      return {
        ...state
      };
    }
    case UserActionTypes.LOGOUT_USER_SUCCESS: {
      return {
      user:[]
      };
    }
    case UserActionTypes.LOGOUT_USER_FAIL: {
      return {
        ...state,
      };
    }
    case UserActionTypes.CHANGE_PASSWORD_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UserActionTypes.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case UserActionTypes.DELETE_USER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.DELETE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case UserActionTypes.DELETE_USER_FAIL: {
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
export default user__Reducer;