import { instance as axios } from "../../@api/axios";
import { MenuCategoryItemsActionTypes } from "../redux/actionTypes";

export function GetMenuCategoryItems() {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_START,
    });
    axios
      .get("/menuCategoryItem")
      .then((res) => {
        MenuCategoryItemsSuccess(dispatch, res.data.data);
      })
      .catch((error) => {
        MenuCategoryItemsFail(dispatch, error.message);
      });
  };
}

const MenuCategoryItemsSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_SUCCESS,
    payload: data,
  });
};

const MenuCategoryItemsFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMS_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryItemsCreate(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_START,
    });
    axios
      .post("/menuCategoryItem",obj)
      .then((res) => {
        MenuCategoryItemsCreateSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryItemsCreateFail(dispatch, error.message);
      });
  };
}

const MenuCategoryItemsCreateSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_SUCCESS,
    payload: data,
  });
};

const MenuCategoryItemsCreateFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSCREATE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryItemsEdit(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_START,
    });
    axios
      .put("/menuCategoryItem" , obj)
      .then((res) => {
        MenuCategoryItemsEditSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryItemsEditFail(dispatch, error.message);
      });
  };
}

const MenuCategoryItemsEditSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_SUCCESS,
    payload: data,
  });
};

const MenuCategoryItemsEditFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSEDIT_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryItemsDelete(obj) {
  const token = localStorage.getItem("accessToken");
  return (dispatch) => {
    dispatch({
      type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_START,
    });
    axios
      .delete("/menuCategoryItem", {
        data: obj,
      })
      .then((res) => {
        MenuCategoryItemsDeleteSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryItemsDeleteFail(dispatch, error.message);
      });
  };
}

const MenuCategoryItemsDeleteSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_SUCCESS,
    payload: data,
  });
};

const MenuCategoryItemsDeleteFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryItemsActionTypes.MENUCATEGORYITEMSDELETE_FAIL,
    payload: {
      errorMessage,
    },
  });
};
