import {
  user_register, user_login,  post_user_invite,password_change} from "../serverSide_apiCalls/account_apiCalls";
import router from "../../router";
import jwt_decode from "jwt-decode";

const state = {
  status: false,
  is_authenticated: false,
  token: localStorage.getItem("token") || "",
  user: {},
  server_error_status: false,
  server_error_message: {},
  server_response: {},
};
const getters = {
  get_current_user: (state) => state.user,
  get_server_error_status: (state) => state.server_error_status,
  get_server_error_message: (state) => state.server_error_message,
  get_is_user_authenticated: (state) => state.is_authenticated,
  get_current_status: (state) => state.status,
  get_server_response: (state) => state.server_response,
};

const actions = {
  async login({ commit, dispatch }, payload) {
    commit("POST_REQUEST");
    commit("CLEAR_SERVER_ERROR");
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
      commit("POST_RESPONSE");
      commit("SERVER_ERROR", error.response.data.detail);
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

  async invite_user({ commit }, payload) {
    commit("CLEAR_SERVER_ERROR");
    commit("POST_RESPONSE");
    commit("POST_REQUEST");
    try {
      const response = await post_user_invite(payload);
      commit("POST_RESPONSE");
      commit("SERVER_RESPONSE", response.data.message);
    } catch (error) {
      commit("POST_RESPONSE");
      commit("SERVER_ERROR", error.response.data.message);
      setTimeout(() => {
        commit("CLEAR_SERVER_ERROR");
      }, 3000);
    }
  },

  async change_password({commit}, payload){
   try {
     const response = await password_change(payload)
     commit("SERVER_RESPONSE", response.data);
   } catch (error) {
    commit("SERVER_ERROR", error.response.data);
   }
  }
};

const mutations = {
  POST_REQUEST(state) {
    state.status = true;
  },
  POST_RESPONSE(state) {
    state.status = false;
  },
  SERVER_ERROR(state, payload) {
    state.server_error_status = true;
    state.server_error_message = payload;
  },
  SERVER_RESPONSE(state, payload) {
    state.server_response = payload;
  },
  CLEAR_SERVER_ERROR(state) {
    state.server_error_status = false;
    state.server_error_message = "";
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
