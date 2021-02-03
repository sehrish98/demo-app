import { MenuItemsActionTypes } from "../redux/actionTypes";

const initial_state = {
  menu:[]
};

const menu__Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case MenuItemsActionTypes.MENUITEMS_START: {
      return {
        ...state,
      };
    }
    case MenuItemsActionTypes.MENUITEMS_SUCCESS: {
      return {
        ...state,
        menu:action.payload
      };
    }
    case MenuItemsActionTypes.MENUITEMS_FAIL: {
      return {
        state: action.payload,
      };
    }

    case MenuItemsActionTypes.MENUITEMSCREATE_START: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSCREATE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuItemsActionTypes.MENUITEMSCREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuItemsActionTypes.MENUITEMSEDIT_START: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSEDIT_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuItemsActionTypes.MENUITEMSEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuItemsActionTypes.MENUITEMSDELETE_START: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSDELETE_SUCCESS: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuItemsActionTypes.MENUITEMSDRAG_START: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSDRAG_SUCCESS: {
        return {
          ...state,
        };
      }
      case MenuItemsActionTypes.MENUITEMSDRAG_FAIL: {
        return {
          state: action.payload,
        };
      }


    default: {
      return state;
    }
  }
};
export default menu__Reducer;