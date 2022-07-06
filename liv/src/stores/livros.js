import { defineStore } from "pinia";
import { useStatisticsStore } from "./statistics";
import { v4 } from "uuid";

export const useBookStore = defineStore("Books", {
  id: "Books",
  state: () => ({
    listOfBooks: [
      {
        Title: "Learning BrainFuck +-+++++++-++++",
        Desc: "Linguagens estranhas de programação podem ser legais de vez em quando...",
        Author: "Gabriel Venâncio",
        Category: "Education",
        Publisher: "Editora Venâncio Literaturas",
        id: v4(),
      },
    ],
  }),
  getters: {
    getBooks: (state) => {
      return state.listOfBooks;
    },
  },
  actions: {
    createNewBook(name) {
      const store = useStatisticsStore();
      store.increaseBooks();
      this.listOfBooks.push(name);
    },
  },
});
