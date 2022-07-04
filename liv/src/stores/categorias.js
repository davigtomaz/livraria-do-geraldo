import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useCategoryStore = defineStore({
  id: "Category",
  state: () => ({
    listOfCategorys: [{ name: "Ação", id: v4() }],
  }),
  getters: {
    getCategorys: (state) => {
      return state.listOfPublishers;
    },
    getSpecificCategory: (state) => {
      return (authorName) =>
        state.listOfAuthors.find(
          (author) => author.name.toLowerCase() === authorName.toLowerCase()
        );
    },
  },
  actions: {
    createNewCategory(name) {
      this.listOfCategorys.push(name);
    },
  },
});
