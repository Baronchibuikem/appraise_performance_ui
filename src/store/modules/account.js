import {
  user_register,
  user_login,
} from "../serverSide_apiCalls/account_apiCalls";
import router from "../../router";
import jwt_decode from "jwt-decode";

const state = {
  status: false,
  is_authenticated: false,
  token: localStorage.getItem("token") || "",
  user: {},
  server_error: {},
};
const getters = {
  get_current_user: (state) => state.user,
  get_server_error: (state) => state.server_error,
  get_is_user_authenticated: (state) => state.is_authenticated,
  get_current_status: (state) => state.status,
};

const actions = {
  async login({ commit, dispatch }, payload) {
    commit("POST_REQUEST");
    try {
      // this makes a call to the server defined in the authentication_api_calls inside the server_side_api_calls folder
      const response = await user_login(payload);
      console.log(response);
      if (response.status === 200) {
        // destructuring our response so we can select only the access
        const { access } = response.data;
        // we set the token to localStorage
        localStorage.setItem("token", access);
        // we decode the access token
        const decoded = jwt_decode(access);
        // pass the decode access token to currentUser action
        dispatch("currentUser", decoded);
      }
    } catch (error) {
      console.log(error.response.data.message, "Error");
      //   commit("SERVER_ERROR", error.response.data.message);
      //   commit("POST_RESPONSE");
    }
  },

  async register({ commit }, payload) {
    commit("POST_REQUEST");
    try {
      const response = await user_register(payload);
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      commit("SERVER_ERROR", error.response.data);
      commit("POST_RESPONSE");
    }
  },

  // used for updating the state for a current logged in user
  async currentUser({ commit }, payload) {
    commit("POST_RESPONSE");
    if (payload !== false) {
      // update user state values and redirect to dashboard
      commit("CURRENT_USER", payload);
      router.push("/dashboard");
    } else {
      // clear user state values and redirect to login
      commit("CURRENT_USER", {});
      router.push("/login");
    }
  },

  async logout({ dispatch }) {
    localStorage.removeItem("token");
    dispatch("currentUser", false);
  },
};

const mutations = {
  POST_REQUEST(state) {
    state.status = true;
  },
  POST_RESPONSE(state) {
    state.status = false;
  },
  SERVER_ERROR(state, payload) {
    state.server_error = payload;
  },
  CLEAR_SERVER_ERROR(state) {
    state.server_error = {};
  },
  REGISTRATION_SUCCESSFUL(state, payload) {
    state.user = payload;
    state.is_authenticated = true;
    state.status = false;
  },
  CURRENT_USER(state, payload) {
    // we check if the length of the object is greater than 0
    if (Object.keys(payload).length !== 0) {
      state.user = { ...payload };
      state.is_authenticated = true;
    } else {
      state.user = { ...payload };
      state.is_authenticated = false;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
