import { get_subteams } from "../serverSide_apiCalls/appraisal_apiCalls";
// import router from "../../router";

const state = {
  subteam_state_obj: [],
};
const getters = {
  allSubTeams: (state) => state.subteam_state_obj,
};

const actions = {
  async subteam_action({ commit }) {
    commit("POST_REQUEST");
    try {
      const response = await get_subteams();
      console.log(response.data);
      if (response.status === 200) {
        commit("subteam_mutation", response.data);
      }
    } catch (error) {
      console.log(error.response.data, "Error");
      //   commit("SERVER_ERROR", error.response.data.message);
      //   commit("POST_RESPONSE");
    }
  },
};

const mutations = {
  subteam_mutation(state, payload) {
    state.subteam_state_obj = payload;
  },
  // POST_RESPONSE(state) {
  //   state.status = false;
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
