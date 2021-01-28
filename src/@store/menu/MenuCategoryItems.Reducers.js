import { MenuCategoryItemsActionTypes } from "../redux/actionTypes";

const initial_state = {
  menu:[]
};

const menu_caregory_items_Reducer = function (state = initial_state, action) {
  switch (action.type) {
    case MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_START: {
      return {
        ...state,
      };
    }
    case MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_SUCCESS: {
      return {
        ...state,
        menu:action.payload
      };
    }
    case MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_FAIL: {
      return {
        state: action.payload,
      };
    }

    case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_FAIL: {
        return {
          state: action.payload,
        };
      }

      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_START: {
        return {
          ...state,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_SUCCESS: {
        const { username, password } = action.payload;
        return {
          ...state,
          username: username,
          password: password,
        };
      }
      case MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_FAIL: {
        return {
          state: action.payload,
        };
      }

    default: {
      return state;
    }
  }
};
export default menu_caregory_items_Reducer;