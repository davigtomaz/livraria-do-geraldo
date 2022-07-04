import { defineStore } from "pinia";
import { v4 } from "uuid";

export const usePublisherStore = defineStore({
  id: "Publisher",
  state: () => ({
    listOfPublishers: [
      { name: "Editora Venâncio Literaturas", site: "", id: v4() },
    ],
  }),
  getters: {
    getPublisher: (state) => {
      return state.listOfPublishers;
    },
    getSpecificPublisher: (state) => {
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
