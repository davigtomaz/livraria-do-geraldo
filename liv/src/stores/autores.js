import { defineStore } from "pinia";
import { useStatisticsStore } from "./statistics";
import { v4 } from "uuid";

export const useAuthorStore = defineStore("Authors", {
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
      const store = useStatisticsStore();
      store.increaseAuthors();
      this.listOfAuthors.push(name);
    },
  },
});
