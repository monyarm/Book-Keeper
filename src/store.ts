import Vue from 'vue';
import Vuex from 'vuex';
import * as _books from '../books.json';
import Book from './book';

const books: Book[] = _books;
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    books,
  },
  mutations: {},
  actions: {},
  getters: {
    getBooks: (state) => {
      return state.books;
    }
  }
});
