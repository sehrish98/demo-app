import { instance as axios } from "../../@api/axios";
import { MenuCategoryActionTypes } from "../redux/actionTypes";

export function GetMenuCategory() {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryActionTypes.MENUCATEGORY_START,
    });
    axios
      .get("/menuCategory")
      .then((res) => {
        MenuCategorySuccess(dispatch, res.data.data);
      })
      .catch((error) => {
        MenuCategoryFail(dispatch, error.message);
      });
  };
}

const MenuCategorySuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORY_SUCCESS,
    payload: data,
  });
};

const MenuCategoryFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORY_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryCreate(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryActionTypes.MENUCATEGORYCREATE_START,
    });
    axios
      .post("/menuCategory", obj)
      .then((res) => {
        MenuCategoryCreateSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryCreateFail(dispatch, error.message);
      });
  };
}

const MenuCategoryCreateSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYCREATE_SUCCESS,
    payload: data,
  });
};

const MenuCategoryCreateFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYCREATE_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryEdit(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryActionTypes.MENUCATEGORYEDIT_START,
    });
    axios
      .put("/menuCategory", obj)
      .then((res) => {
        MenuCategoryEditSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryEditFail(dispatch, error.message);
      });
  };
}

const MenuCategoryEditSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYEDIT_SUCCESS,
    payload: data,
  });
};

const MenuCategoryEditFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYEDIT_FAIL,
    payload: {
      errorMessage,
    },
  });
};

export function MenuCategoryDelete(obj) {
  return (dispatch) => {
    dispatch({
      type: MenuCategoryActionTypes.MENUCATEGORYDELETE_START,
    });
    axios
      .delete("/menuCategory", obj)
      .then((res) => {
        MenuCategoryDeleteSuccess(dispatch, res.data);
      })
      .catch((error) => {
        MenuCategoryDeleteFail(dispatch, error.message);
      });
  };
}

const MenuCategoryDeleteSuccess = (dispatch, data, history) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYDELETE_SUCCESS,
    payload: data,
  });
};

const MenuCategoryDeleteFail = (dispatch, errorMessage) => {
  dispatch({
    type: MenuCategoryActionTypes.MENUCATEGORYDELETE_FAIL,
    payload: {
      errorMessage,
    },
  });
};
