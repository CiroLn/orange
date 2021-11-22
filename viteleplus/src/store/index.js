import { createStore } from "vuex"
import root_mutations from "./mutations";

const store = createStore({
  state() {
    return {
      headerMenuId: 'elplus',
    }
  },
  mutations: {
    ...root_mutations,
  }
});

export default store;