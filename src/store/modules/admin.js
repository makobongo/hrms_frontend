import axios from "axios";
const token = localStorage.getItem("usr");

export const namespaced = true;

export const state = {
  user: null,
  error: null
};

export const mutations = {
  FETCH_LOGGED_IN_USER(state, payload) {
    state.user = payload;
    state.error = null;
  },
  FETCH_LOGGED_IN_ERROR(state, payload) {
    state.error = payload;
    state.user = null;
  }
};

export const actions = {
  async fetchLoggedInUser({ commit }) {
    try {
      const response = await axios.get(
        "http://localhost:3000/hr/api/logged/hr",
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("FETCH_LOGGED_IN_USER", response.data.msg);
    } catch (e) {
      commit("FETCH_LOGGED_IN_ERROR", e.response.data.msg);
    }
  }
  // fetchLoggedInUser() {
  // try {
  //   const response =  axios.get(
  //     "http://localhost:3000/hr/api/logged/hr",
  //     {
  //       headers: {
  //         "x-access-token": token
  //       }
  //     }
  //   );
  //   console.log("success!", response.data.msg);
  // } catch (e) {
  //   console.log(e.response);
  // }
  // }
};
