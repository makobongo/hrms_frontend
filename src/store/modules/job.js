import axios from "axios";
import router from "../../router";
const token = localStorage.getItem("usr");
export const namespaced = true;

export const state = {
  jobs: null,
  jobDetail: null,
  successMsg: null,
  errorMsg: null,
  successDeleteMsg: null,
  successErrorDeleteMsg: null,
  successUpdateMsg: null,
  errorUpdateMsg: null
};

export const mutations = {
  FETCH_JOBS(state, payload) {
    state.jobs = payload;
  },
  CREATED_JOB(state, payload) {
    state.successMsg = payload;
    state.errorMsg = null;
    state.successDeleteMsg = null;
    state.successErrorDeleteMsg = null;
  },
  ERROR_CREATING_JOB(state, payload) {
    state.errorMsg = payload;
    state.successMsg = null;
  },
  FETCH_JOB_DETAIL(state, payload) {
    state.jobDetail = payload;
  },
  SUCCESS_DELETED(state, payload) {
    state.successDeleteMsg = payload;
    state.successErrorDeleteMsg = null;
  },
  ERROR_DELETING_JOB(state, payload) {
    state.successErrorDeleteMsg = payload;
    state.successDeleteMsg = null;
  },
  UPDATE_JOB(state, payload) {
    state.successUpdateMsg = payload;
    state.errorUpdateMsg = null;
  },
  ERROR_UPDATING_JOB(state, payload) {
    state.successUpdateMsg = null;
    state.errorUpdateMsg = payload;
  }
};

export const actions = {
  async fetchJob({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/hr/api/jobs", {
        headers: {
          "x-access-token": token
        }
      });
      commit("FETCH_JOBS", response.data.msg);
    } catch (e) {
      console.log(e.response.data.msg);
    }
  },
  async createJob({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:3000/hr/api/jobs/create",
        payload,
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("CREATED_JOB", response.data.msg);
      await router.push("/admin/jobs");
    } catch (e) {
      console.log("ERROR_CREATING_JOB", e.response.data.msg);
    }
  },
  async fetchDetail({ commit }, payload) {
    try {
      const response = await axios.get(
        `http://localhost:3000/hr/api/jobs/detail/${payload}`,
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("FETCH_JOB_DETAIL", response.data.msg.job);
    } catch (e) {
      console.log(e);
    }
  },
  async deleteJob({ commit }, payload) {
    try {
      const response = await axios.post(
        `http://localhost:3000/hr/api/jobs/delete/${payload}`,
        {},
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("SUCCESS_DELETED", response.data.msg);
    } catch (e) {
      commit("ERROR_DELETING_JOB", e.response.data.msg);
    }
  },
  async updateJob({ commit }, payload) {
    try {
      const response = await axios.post(
        `http://localhost:3000/hr/api/jobs/update/${payload._id}`,
        payload,
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      commit("UPDATE_JOB", response.data.msg);
    } catch (e) {
      commit("ERROR_UPDATING_JOB", e.response.data.msg);
    }
  }
};
