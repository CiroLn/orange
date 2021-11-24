import { createStore } from "vuex"
import { ROOT_MUTAIONS } from "./mutation-types";

const store = createStore({
  state() {
    return {
      pageTab: '', // elplus
    }
  },
  mutations: {
    [ROOT_MUTAIONS.PAGE_TAB_CHANGE](state, id) {
      state.pageTab = id;
    } 
  }
});

export default store;