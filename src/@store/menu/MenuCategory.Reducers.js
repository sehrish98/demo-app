import { MenuCategoryActionTypes } from "../redux/actionTypes";

const initial_state = {
  menu:[]
};

const menu_caregory_Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case MenuCategoryActionTypes.MENUCATEGORY_START: {
      return {
        ...state,
      };
    }
    case MenuCategoryActionTypes.MENUCATEGORY_SUCCESS: {
      return {
        ...state,
        menu:action.payload
      };
    }
    case MenuCategoryActionTypes.MENUCATEGORY_FAIL: {
      return {
        state: action.payload,
      };
    }

    case MenuCategoryActionTypes.MENUCATEGORYCREATE_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYCREATE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYCREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuCategoryActionTypes.MENUCATEGORYEDIT_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYEDIT_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuCategoryActionTypes.MENUCATEGORYDELETE_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYDELETE_SUCCESS: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuCategoryActionTypes.MENUCATEGORYDRAG_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYDRAG_SUCCESS: {
        return {
          ...state,
        };
      }
      case MenuCategoryActionTypes.MENUCATEGORYDRAG_FAIL: {
        return {
          state: action.payload,
        };
      }

    default: {
      return state;
    }
  }
};
export default menu_caregory_Reducer;