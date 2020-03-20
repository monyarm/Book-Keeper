import Vue from 'vue';
import Vuex from 'vuex';
//Webpack fixes this
import Book from './book';
import Library from './library';

const library: Library = Library.getLibrary();
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    library,
  },
  mutations: {},
  actions: {},
  getters: {
    }
});
