import Vuex from "vuex";
import Vue from "vue";
import UserAuth from "./modules/account";
import Appraisal from "./modules/appraisal";
import createPersistedState from "vuex-persistedstate";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    UserAuth,
    Appraisal,
  },
});
