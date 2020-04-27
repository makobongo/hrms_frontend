import axios from "axios";
const token = localStorage.getItem("usr");
export const namespaced = true;

export const state = {
  organization: null,
  successMsg: null,
  errorMsg: null
};

export const mutations = {
  FETCH_ORGANIZATION(state, payload) {
    state.organization = payload;
  },
  CREATED_ORGANIZATION(state, payload) {
    state.successMsg = payload;
    state.errorMsg = null;
  },
  ERROR_CREATING_ORGANIZATION(state, payload) {
    state.errorMsg = payload;
    state.successMsg = null;
  }
};

export const actions = {
  async fetchOrg({ commit }) {
    try {
      const response = await axios.get(
        "http://localhost:3000/hr/api/organization",
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      // console.log(response.data.msg);
      commit("FETCH_ORGANIZATION", response.data.msg);
    } catch (e) {
      console.log(e.response.data.msg);
    }
  },
  async createOrg({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:3000/hr/api/organization/create",
        payload,
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("CREATED_ORGANIZATION", response.data.msg);
    } catch (e) {
      console.log("ERROR_CREATING_ORGANIZATION", e.response.data.msg);
    }
  }
};
