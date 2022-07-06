import { defineStore } from "pinia";
import { useStatisticsStore } from "./statistics";
import { v4 } from "uuid";

export const useCategoryStore = defineStore("Categorys", {
  id: "Category",
  state: () => ({
    listOfCategories: [
      {
        name: "Romântico",
        desc: "Fala sobre amores, paixões, traições e tudo que envolve o coração! (menos cardiologia)",
        id: v4(),
      },
      {
        name: "Education",
        desc: "Livros educativos, para fazer seu conhecimento crescer!",
        id: v4(),
      },
    ],
  }),
  getters: {
    getCategorys: (state) => {
      return state.listOfCategories;
    },
  },
  actions: {
    createNewCategory(name) {
      const store = useStatisticsStore();
      store.increaseCategories();
      this.listOfCategories.push(name);
    },
  },
});
