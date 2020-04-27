import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/store/modules/auth.js";
import * as organization from "@/store/modules/organization.js";
import * as admin from "@/store/modules/admin.js";
import * as job from "@/store/modules/job.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    organization,
    admin,
    job
  }
});
