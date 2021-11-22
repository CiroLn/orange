import { ROOT_MUTAIONS } from "./mutation-types";

export default {
  [ROOT_MUTAIONS.HEADER_MENU_CHANGE](state, id) {
    state.headerMenuId = id;
  }  
}