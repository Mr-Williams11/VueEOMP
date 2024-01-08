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
  getters: {},
  mutations: {
    setIntro(state, intro) {
      state.Intro = intro;
    },
    setAbout(state, about) {
      state.About = about;
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
        commit('setAbout', aboutData[0].info);
        commit('setProjects', projectData);
        commit('setResume', resumeData);
        commit('setTestimonials', testimonialData);
        commit('setContact', contactData[0].infomation);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  modules: {},
});
