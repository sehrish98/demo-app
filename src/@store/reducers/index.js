import { combineReducers } from "redux";

import cart__reducer from "../Cart/Cart.Reducer"
import user__reducer from "../auth/Auth.Reducer"
import menu__reducer from "../menu/Menu.Reducers"
import dish__Reducer from "../dish/Dish.Reducers"
import optionset__Reducer from "../optionSet/Optionset.Reducers"
import menu_caregory_items_Reducer from "../menu/MenuCategoryItems.Reducers"
import menu_caregory_Reducer from "../menu/MenuCategory.Reducers"
// import order__reducer from "../Order.Reducers"
import ordertable__reducer from "../ordertable/OrderTable.Reducers"
const createReducer = (asyncReducers) =>
  combineReducers({
    cartreducer:cart__reducer,
    user__reducer:user__reducer,
    menu__reducer:menu__reducer,
    dish__Reducer:dish__Reducer,
    menu_caregory_Reducer:menu_caregory_Reducer,
    menu_caregory_items_Reducer:menu_caregory_items_Reducer,
    optionset__Reducer:optionset__Reducer,
    ...asyncReducers,
  });

export default createReducer;
