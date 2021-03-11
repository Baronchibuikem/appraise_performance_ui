import { get_appraisals_api, get_subteams, team_members_in_a_subteam, get_user_appraisal_form } from "../serverSide_apiCalls/appraisal_apiCalls";
// import router from "../../router";

const state = {
  subteam_list: [],
  subteam_members : [],
  appraisals: [],
  user_appraisal_obj: []
};
const getters = {
  allSubTeams: (state) => state.subteam_list,
  allSubTeamMembers: (state) => state.subteam_members,
  allAppraisals: (state) => state.appraisals,
  singleUserAppraisal: (state) => state.user_appraisal_obj
};

const actions = {
  async subteam_action({ commit }) {
    commit("POST_RESPONSE")
    commit("POST_REQUEST");
    try {
      const response = await get_subteams();
      console.log(response.data);
      if (response.status === 200) {
        commit("subteam_mutation", response.data);
      }
      commit("POST_RESPONSE")
    } catch (error) {
      console.log(error.response.data, "Error");
      //   commit("SERVER_ERROR", error.response.data.message);
      //   commit("POST_RESPONSE");
    }
  },
  async subteam_member_action({ commit, dispatch }, payload) {
    commit("POST_RESPONSE")
    commit("POST_REQUEST");
    dispatch("clear_list_time", 1000)
    try {
      const response = await team_members_in_a_subteam(payload);
      console.log(response.data);
      if (response.status === 200) {
        commit("subteam_member_mutation", response.data);
      }
      commit("POST_RESPONSE")
    } catch (error) {
      console.log(error.response.data, "Error");
      //   commit("SERVER_ERROR", error.response.data.message);
      //   commit("POST_RESPONSE");
    }
  },
  async get_appraisals({commit}){
    commit("POST_RESPONSE")
    commit("POST_REQUEST");
    try {
      const response  = await get_appraisals_api()
      commit("appraisals", response.data)
    } catch (error) {
      console.log(error.response.data, "Error");
    }
  },

  async clear_list({ commit }, time) {
    setTimeout(() => {
      commit("clear_list_time");
    }, time);
  },

  async get_user_appraisal_form({commit}, payload){
    console.log(payload, "showing payload")
    const response = await get_user_appraisal_form(payload)
    console.log(response.data)
    commit('user_appraisal', response.data)
  },
  
};

const mutations = {
  subteam_mutation(state, payload) {
    state.subteam_list = payload;
  },
  subteam_member_mutation(state, payload) {
    state.subteam_members = payload;
  },
  clear_list_time(state){
    state.subteam_members = ""
  },
  appraisals(state, payload){
    state.appraisals = payload
  },
  user_appraisal(state, payload){
    state.user_appraisal_obj = payload
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
};
