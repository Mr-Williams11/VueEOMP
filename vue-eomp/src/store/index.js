// Import Axios
import axios from 'axios';

import { createStore } from 'vuex';

export default createStore({
  state: {
    Intro: '',
    About: '',
    Projects: [],
    Resume: [],
    Testimonials: [],
    Contact: '',
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
        const homeResponse = await axios.get('http://localhost:3000/home');
        const aboutResponse = await axios.get('http://localhost:3000/about');
        const projectResponse = await axios.get('http://localhost:3000/projects');
        const resumeResponse = await axios.get('http://localhost:3000/resume');
        const testimonialsResponse = await axios.get('http://localhost:3000/testimonials');
        const contactResponse = await axios.get('http://localhost:3000/contact');

        const homeData = homeResponse.data;
        const aboutData = aboutResponse.data;
        const projectData = projectResponse.data;
        const resumeData = resumeResponse.data;
        const testimonialData = testimonialsResponse.data;
        const contactData = contactResponse.data;

        // Committing mutations to set data in state
        commit('setIntro', homeData[0].intro);
        commit('setName', homeData[0].name);
        commit('setInfo', aboutData[0].info);
        commit('setText1', aboutData[0].text1);
        commit('setProjects', projectData);
        commit('setResume', resumeData);
        commit('setTestimonials', testimonialData);
        commit('setContact', contactData[0].infomation);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  modules: {

  },
});
