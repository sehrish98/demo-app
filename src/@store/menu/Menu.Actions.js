import { instance as axios } from "../../@api/axios";
import { MenuItemsActionTypes } from "../redux/actionTypes";

export function GetMenuItems() {
  return (dispatch) => {
    dispatch({
      type: MenuItemsActionTypes.MENUITEMS_START,
    });
    axios
      .get("/menu")
      .then((res) => {
        MenuItemsSuccess(dispatch, res.data.data);
      })
      .catch((error) => {
        MenuItemsFail(dispatch, error.message);
      });
  };
}

const MenuItemsSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMS_SUCCESS,
    payload: data,
  });
};

const MenuItemsFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMS_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuItemsCreate(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuItemsActionTypes.MENUITEMSCREATE_START,
    });
    axios
      .post("/menu", obj)
      .then((res) => {
        MenuItemsCreateSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuItemsCreateFail(dispatch, error.message);
      });
  };
}

const MenuItemsCreateSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSCREATE_SUCCESS,
    payload: data,
  });
};

const MenuItemsCreateFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSCREATE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuItemsEdit(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuItemsActionTypes.MENUITEMSEDIT_START,
    });
    axios
      .put("/menu", obj)
      .then((res) => {
        MenuItemsEditSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuItemsEditFail(dispatch, error.message);
      });
  };
}

const MenuItemsEditSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSEDIT_SUCCESS,
    payload: data,
  });
};

const MenuItemsEditFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSEDIT_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuItemsDelete(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuItemsActionTypes.MENUITEMSDELETE_START,
    });
    axios
      .delete("/menu", { data: obj })
      .then((res) => {
        MenuItemsDeleteSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuItemsDeleteFail(dispatch, error.message);
      });
  };
}

const MenuItemsDeleteSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSDELETE_SUCCESS,
    payload: data,
  });
};

const MenuItemsDeleteFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuItemsActionTypes.MENUITEMSDELETE_FAIL,
    payload: {
      errorMessage,
    },
  });
};
