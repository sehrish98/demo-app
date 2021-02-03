export const UserActionTypes = {
  CREATE_USER_START: " CREATE_USER_START",
  CREATE_USER_SUCCESS: " CREATE_USER_SUCCESS",
  CREATE_USER_FAIL: " CREATE_USER_FAIL",

  LOGIN_USER_START: " LOGIN_USER_START",
  LOGIN_USER_SUCCESS: " LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: " LOGIN_USER_FAIL",

  CHANGE_PASSWORD_START: "CHANGE_PASSWORD_START",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAIL: "CHANGE_PASSWORD_FAIL",

  LOGOUT_USER_START: " LOGOUT_USER_START",
  LOGOUT_USER_SUCCESS: " LOGOUT_USER_SUCCESS",
  LOGOUT_USER_FAIL: " LOGOUT_USER_FAIL",

  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL: "DELETE_USER_FAIL",
};

export const CartActionTypes={
  ADDTOCART_START: "ADDTOCART_START",
  ADDTOCART_SUCCESS: "ADDTOCART_SUCCESS",
  ADDTOCART_FAIL: "ADDTOCART_FAIL",

  REMOVECART_START: "REMOVECART_START",
  REMOVECART_SUCCESS: "REMOVECART_SUCCESS",
  REMOVECART_FAIL: "REMOVECART_FAIL",

  REMOVEQUANTITY_START: "REMOVEQUANTITY_START",
  REMOVEQUANTITY_SUCCESS: "REMOVEQUANTITY_SUCCESS",
  REMOVEQUANTITY_FAIL: "REMOVEQUANTITY_FAIL",
}


export const MenuItemsActionTypes={
  MENUITEMS_START: "MENUITEMS_START",
  MENUITEMS_SUCCESS: "MENUITEMS_SUCCESS",
  MENUITEMS_FAIL: "MENUITEMS_FAIL",

  MENUITEMSCREATE_START: "MENUITEMSCREATE_START",
  MENUITEMSCREATE_SUCCESS: "MENUITEMSCREATE_SUCCESS",
  MENUITEMSCREATE_FAIL: "MENUITEMSCREATE_FAIL",

  MENUITEMSEDIT_START: "MENUITEMSEDIT_START",
  MENUITEMSEDIT_SUCCESS: "MENUITEMSEDIT_SUCCESS",
  MENUITEMSEDIT_FAIL: "MENUITEMSEDIT_FAIL",

  MENUITEMSDELETE_START: "MENUITEMSDELETE_START",
  MENUITEMSDELETE_SUCCESS: "MENUITEMSDELETE_SUCCESS",
  MENUITEMSDELETE_FAIL: "MENUITEMSDELETE_FAIL",

  MENUITEMSDRAG_START: "MENUITEMSDRAG_START",
  MENUITEMSDRAG_SUCCESS: "MENUITEMSDRAG_SUCCESS",
  MENUITEMSDRAG_FAIL: "MENUITEMSDRAG_FAIL",

}

export const MenuCategoryActionTypes={
  GETMENUCATEGORY_START: "GETMENUCATEGORY_START",
  GETMENUCATEGORY_SUCCESS: "GETMENUCATEGORY_SUCCESS",
  GETMENUCATEGORY_FAIL: "GETMENUCATEGORY_FAIL",

  MENUCATEGORYCREATE_START: "MENUCATEGORYCREATE_START",
  MENUCATEGORYCREATE_SUCCESS: "MENUCATEGORYCREATE_SUCCESS",
  MENUCATEGORYCREATE_FAIL: "MENUCATEGORYCREATE_FAIL",

  MENUCATEGORYEDIT_START: "MENUCATEGORYEDIT_START",
  MENUCATEGORYEDIT_SUCCESS: "MENUCATEGORYEDIT_SUCCESS",
  MENUCATEGORYEDIT_FAIL: "MENUCATEGORYEDIT_FAIL",

  MENUCATEGORYDELETE_START: "MENUCATEGORYDELETE_START",
  MENUCATEGORYDELETE_SUCCESS: "MENUCATEGORYDELETE_SUCCESS",
  MENUCATEGORYDELETE_FAIL: "MENUCATEGORYDELETE_FAIL",

  MENUCATEGORYDRAG_START: "MENUCATEGORYDRAG_START",
  MENUCATEGORYDRAG_SUCCESS: "MENUCATEGORYDRAG_SUCCESS",
  MENUCATEGORYDRAG_FAIL: "MENUCATEGORYDRAG_FAIL",
}

export const MenuCategoryItemsActionTypes={
  GETMENUCATEGORYITEMS_START: "GETMENUCATEGORYITEMS_START",
  GETMENUCATEGORYITEMS_SUCCESS: "GETMENUCATEGORYITEMS_SUCCESS",
  GETMENUCATEGORYITEMS_FAIL: "GETMENUCATEGORYITEMS_FAIL",

  MENUCATEGORYITEMSCREATE_START: "MENUCATEGORYITEMSCREATE_START",
  MENUCATEGORYITEMSCREATE_SUCCESS: "MENUCATEGORYITEMSCREATE_SUCCESS",
  MENUCATEGORYITEMSCREATE_FAIL: "MENUCATEGORYITEMSCREATE_FAIL",

  MENUCATEGORYITEMSEDIT_START: "MENUCATEGORYITEMSEDIT_START",
  MENUCATEGORYITEMSEDIT_SUCCESS: "MENUCATEGORYITEMSEDIT_SUCCESS",
  MENUCATEGORYITEMSEDIT_FAIL: "MENUCATEGORYITEMSEDIT_FAIL",

  MENUCATEGORYITEMSDELETE_START: "MENUCATEGORYITEMSDELETE_START",
  MENUCATEGORYITEMSDELETE_SUCCESS: "MENUCATEGORYITEMSDELETE_SUCCESS",
  MENUCATEGORYITEMSDELETE_FAIL: "MENUCATEGORYDELETE_FAIL",

  MENUCATEGORYITEMSDRAG_START: "MENUCATEGORYDRAG_START",
  MENUCATEGORYITEMSDRAG_SUCCESS: "MENUCATEGORYDRAG_SUCCESS",
  MENUCATEGORYITEMSDRAG_FAIL: "MENUCATEGORYDRAG_FAIL",

}

export const DishActionTypes={
  GETDISH_START: "GETDISH_START",
  GETDISH_SUCCESS: "GETDISH_SUCCESS",
  GETDISH_FAIL: "GETDISH_FAIL",

  DISHCREATE_START: "DISHCREATE_START",
  DISHCREATE_SUCCESS: "DISHCREATE_SUCCESS",
  DISHCREATE_FAIL: "DISHCREATE_FAIL",

  DISHEDIT_START: "DISHEDIT_START",
  DISHEDIT_SUCCESS: "DISHEDIT_SUCCESS",
  DISHEDIT_FAIL: "DISHEDIT_FAIL",

  DISHDETAILS_START: "DISHDETAILS_START",
  DISHDETAILS_SUCCESS: "DISHDETAILS_SUCCESS",
  DISHDETAILS_FAIL: "DISHDETAILS_FAIL",

  DISHDELETE_START: "DISHDELETE_START",
  DISHDELETE_SUCCESS: "DISHDELETE_SUCCESS",
  DISHDELETE_FAIL: "DISHDELETE_FAIL",

  DISHDRAG_START: "DISHDRAG_START",
  DISHDRAG_SUCCESS: "DISHDRAG_SUCCESS",
  DISHDRAG_FAIL: "DISHDRAG_FAIL",
}


export const OptionSetypes={
  GETOPTIONSET_START: "GETOPTIONSET_START",
  GETOPTIONSET_SUCCESS: "GETOPTIONSET_SUCCESS",
  GETOPTIONSET_FAIL: "GETOPTIONSET_FAIL",

  OPTIONSETCREATE_START: "OPTIONSETCREATE_START",
  OPTIONSETCREATE_SUCCESS: "OPTIONSETCREATE_SUCCESS",
  OPTIONSETCREATE_FAIL: "OPTIONSETCREATE_FAIL",

  OPTIONSETEDIT_START: "OPTIONSETEDIT_START",
  OPTIONSETEDIT_SUCCESS: "OPTIONSETEDIT_SUCCESS",
  OPTIONSETEDIT_FAIL: "OPTIONSETEDIT_FAIL",

  OPTIONSETDETAILS_START: "OPTIONSETDETAILS_START",
  OPTIONSETDETAILS_SUCCESS: "OPTIONSETDETAILS_SUCCESS",
  OPTIONSETDETAILS_FAIL: "OPTIONSETDETAILS_FAIL",

  OPTIONSETDELETE_START: "OPTIONSETDELETE_START",
  OPTIONSETDELETE_SUCCESS: "OPTIONSETDELETE_SUCCESS",
  OPTIONSETDELETE_FAIL: "OPTIONSETDELETE_FAIL",

  OPTIONSETDRAG_START: "OPTIONSETDRAG_START",
  OPTIONSETDRAG_SUCCESS: "OPTIONSETDRAG_SUCCESS",
  OPTIONSETDRAG_FAIL: "OPTIONSETDRAG_FAIL",
}

export const ordertabletypes={
  GETORDERTABLE_START: "GETORDERTABLE_START",
  GETORDERTABLE_SUCCESS: "GETORDERTABLE_SUCCESS",
  GETORDERTABLE_FAIL: "GETORDERTABLE_FAIL",

  OPTIONSETCREATE_START: "ORDERTABLECREATE_START",
  OPTIONSETCREATE_SUCCESS: "ORDERTABLECREATE_SUCCESS",
  OPTIONSETCREATE_FAIL: "ORDERTABLECREATE_FAIL",

  ORDERTABLEEDIT_START: "ORDERTABLEEDIT_START",
  ORDERTABLEEDIT_SUCCESS: "ORDERTABLEEDIT_SUCCESS",
  ORDERTABLEEDIT_FAIL: "ORDERTABLEEDIT_FAIL",

  ORDERTABLEETAILS_START: "OPTIONSETDETAILS_START",
  ORDERTABLEDETAILS_SUCCESS: "ORDERTABLEDETAILS_SUCCESS",
  ORDERTABLEDETAILS_FAIL: "ORDERTABLEDETAILS_FAIL",

  ORDERTABLEDELETE_START: "ORDERTABLEDELETE_START",
  ORDERTABLEDELETE_SUCCESS: "ORDERTABLEDELETE_SUCCESS",
  OPTIONSETDELETE_FAIL: "ORDERTABLEDELETE_FAIL",
}

export const orderactiontypes={
  GETORDER_START: "GETORDER_START",
  GETORDERTABLE_SUCCESS: "GETORDER_SUCCESS",
  GETORDER_FAIL: "GETORDER_FAIL",

  GETORDERREVENUE_START: "GETORDERREVENUE_START",
  GETORDERREVENUE_SUCCESS: "GETORDERREVENUE_SUCCESS",
  GETORDERREVENUE_FAIL: "GETORDERREVENUE_FAIL",

  ORDEREDIT_START: "ORDEREDIT_START",
  ORDEREDIT_SUCCESS: "ORDEREDIT_SUCCESS",
  ORDEREDIT_FAIL: "ORDEREDIT_FAIL",

  GETORDERDETAIL_START: "GETORDERDETAIL_START",
  GETORDERDETAIL_SUCCESS: "GETORDERDETAIL_SUCCESS",
  GETORDERDETAIL_FAIL: "GETORDERDETAIL_FAIL",
}


export const ClientActionTypes = {
  GET_CLIENT_LIST_START: "GET_CLIENT_LIST_START",
  GET_CLIENT_LIST_SUCCESS: "GET_CLIENT_LIST_SUCCESS",
  GET_CLIENT_LIST_FAIL: "GET_CLIENT_LIST_FAIL",

  POST_MANAGER_INFO_START: "POST_MANAGER_INFO_START",
  POST_MANAGER_INFO_SUCCESS: "POST_MANAGER_INFO_SUCCESS",
  POST_MANAGER_INFO_FAIL: "POST_MANAGER_INFO_FAIL",

  POST_ADD_CATAGORY_START: "POST_ADD_CATAGORY_START",
  POST_ADD_CATAGORY_SUCCESS: "POST_ADD_CATAGORY_SUCCESS",
  POST_ADD_CATAGORY_FAIL: "POST_ADD_CATAGORY_FAIL",

  POST_ADD_SUB_CATAGORY_START: "POST_ADD_SUB_CATAGORY_START",
  POST_ADD_SUB_CATAGORY_SUCCESS: "POST_ADD_SUB_CATAGORY_SUCCESS",
  POST_ADD_SUB_CATAGORY_FAIL: "POST_ADD_SUB_CATAGORY_FAIL",

  POST_ADD_WEBSITE_INFO_START: "POST_ADD_WEBSITE_INFO_START",
  POST_ADD_WEBSITE_INFO_SUCCESS: "POST_ADD_WEBSITE_INFO_SUCCESS",
  POST_ADD_WEBSITE_INFO_FAIL: "POST_ADD_WEBSITE_INFO_FAIL",

  EDIT_SUB_CATAGORY_START: "EDIT_SUB_CATAGORY_START",
  EDIT_SUB_CATAGORY_SUCCESS: "EDIT_SUB_CATAGORY_SUCCESS",
  EDIT_SUB_CATAGORY_FAIL: "EDIT_SUB_CATAGORY_FAIL",

  GET_CLIENT_DETAILS_START: "GET_CLIENT_DETAILS_START",
  GET_CLIENT_DETAILS_SUCCESS: "GET_CLIENT_DETAILS_SUCCESS",
  GET_CLIENT_DETAILS_FAIL: "GET_CLIENT_DETAILS_FAIL",

  EDIT_CLIENT_DETAILS_START: "EDIT_CLIENT_DETAILS_START",
  EDIT_CLIENT_DETAILS_SUCCESS: "EDIT_CLIENT_DETAILS_SUCCESS",
  EDIT_CLIENT_DETAILS_FAIL: "EDIT_CLIENT_DETAILS_FAIL",

  GET_CLIENT_PRODUCTS_START: "GET_CLIENT_PRODUCTS_START",
  GET_CLIENT_PRODUCTS_SUCCESS: "GET_CLIENT_PRODUCTS_SUCCESS",
  GET_CLIENT_PRODUCTS_FAIL: "GET_CLIENT_PRODUCTS_FAIL",

  GET_CLIENT_WEBSITE_INFO_START: "GET_CLIENT_WEBSITE_INFO_START",
  GET_CLIENT_WEBSITE_INFO_SUCCESS: "GET_CLIENT_WEBSITE_INFO_SUCCESS",
  GET_CLIENT_WEBSITE_INFO_FAIL: "GET_CLIENT_WEBSITE_INFO_FAIL",


  PUT_CLIENT_WEBSITE_INFO_START: "PUT_CLIENT_WEBSITE_INFO_START",
  PUT_CLIENT_WEBSITE_INFO_SUCCESS: "PUT_CLIENT_WEBSITE_INFO_SUCCESS",
  PUT_CLIENT_WEBSITE_INFO_FAIL: "PUT_CLIENT_WEBSITE_INFO_FAIL",

  REMOVE_CATAGORY_START: "REMOVE_CATAGORY_START",
  REMOVE_CATAGORY_SUCCESS: "REMOVE_CATAGORY_SUCCESS",
  REMOVE_CATAGORY_FAIL: "REMOVE_CATAGORY_FAIL",

  GET_CLIENT_PRODUCTS_LIST_START: "GET_CLIENT_PRODUCTS_LIST_START",
  GET_CLIENT_PRODUCTS_LIST_SUCCESS: "GET_CLIENT_PRODUCTS_LIST_SUCCESS",
  GET_CLIENT_PRODUCTS_LIST_FAIL: "GET_CLIENT_PRODUCTS_LIST_FAIL",

  SET_SETP: "SET_SETP",
};
