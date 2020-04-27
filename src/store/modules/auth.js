import axios from "axios";
import router from "../../router";

export const namespaced = true;

export const state = {
  isLoggedIn: false,
  loggedInError: null,
  isLoading: false
};
export const mutations = {
  LOGGED_IN(state) {
    state.isLoggedIn = true;
    state.isLoading = true;
    state.loggedInError = false;
  },
  LOGGED_IN_ERROR(state, payload) {
    state.loggedInError = payload;
    state.isLoading = true;
    state.isLoggedIn = false;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = false;
    state.loggedInError = null;
    state.isLoading = false;
  }
};

export const actions = {
  async loginUser({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:3000/hr/api/login",
        payload
      );
      localStorage.setItem("usr", response.data);
      commit("LOGGED_IN");
      await router.push("/auth/org");
    } catch (e) {
      commit("LOGGED_IN_ERROR", e.response.data.msg);
    }
  },
  async logoutUser({ commit }) {
    localStorage.removeItem("usr");
    commit("LOGOUT_USER");
    await router.push("/");
  }
};
