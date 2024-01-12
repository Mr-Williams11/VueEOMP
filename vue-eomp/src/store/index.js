// Import Axios
import axios from 'axios';

import { createStore } from 'vuex';

export default createStore({
  state: {
    Intro: null,
    About: null,
    Projects: [],
    Resume: [],
    Testimonials: [],
    Contact: null,
  },
  getters: {

  },
  mutations: {
    setIntro(state, intro) {
      state.Intro = intro;
    },
    setName(state, name) {
      state.Name = name;
    },
    setInfo(state, info) {
      state.Info = info;
    },
    setText1(state, text1) {
      state.Text1 = text1;
    },
    setProjects(state, projects) {
      state.Projects = projects;
    },
    setResume(state, resume) {
      state.Resume = resume;
    },
    setTestimonials(state, testimonials) {
      state.Testimonials = testimonials;
    },
    setContact(state, contact) {
      state.Contact = contact;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        // Fetching data using Axios
        const homeResponse = await axios.get('https://mr-williams11.github.io/VueEOMP/vue-eomp/src/data/');
        const homeData = homeResponse.data.home[0];
        console.log(homeData.intro);
        commit('setName', homeData.name);
        commit('setIntro', homeData.intro);
        const aboutResponse = await axios.get('https://mr-williams11.github.io/VueEOMP/vue-eomp/src/data/');
        const aboutData = aboutResponse.data.about[0];
        commit('setInfo', aboutData.info);
        commit('setText1', aboutData.text1);
        const projectResponse = await axios.get('https://mr-williams11.github.io/VueEOMP/vue-eomp/src/data/');
        const projectData = projectResponse.data.projects;
        commit('setProjects', projectData);
        const resumeResponse = await axios.get('https://mr-williams11.github.io/VueEOMP/vue-eomp/src/data/');
        const resumeData = resumeResponse.data.resume;
        commit('setResume', resumeData);
        const testimonialsResponse = await axios.get('https://mr-williams11.github.io/VueEOMP/vue-eomp/src/data/');
        const testimonialData = testimonialsResponse.data.testimonials;
        commit('setTestimonials', testimonialData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  modules: {

  },
});
