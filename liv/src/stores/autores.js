import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useAuthorStore = defineStore({
  id: "Author",
  state: () => ({
    listOfAuthors: [{ name: "João", id: v4() }],
  }),
  getters: {
    getAuthors: (state) => {
      return state.listOfAuthors;
    },
    getSpecificAuthor: (state) => {
      return (authorName) =>
        state.listOfAuthors.find(
          (author) => author.name.toLowerCase() === authorName.toLowerCase()
        );
    },
  },
  actions: {
    createNewAuthor(name) {
      this.listOfAuthors.push(name);
    },
  },
});
