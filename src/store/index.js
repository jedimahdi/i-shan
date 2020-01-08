import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: []
  },
  mutations: {
    set_courses(state, payload) {
      state.courses = payload.courses;
    }
  },
  actions: {},
  modules: {}
});
