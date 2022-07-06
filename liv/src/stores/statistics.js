import { defineStore } from "pinia";

export const useStatisticsStore = defineStore("Statistics", {
  id: "Statistics",
  state: () => ({
    Statistics: {
      totalBooks: 0,
      totalAuthors: 0,
      totalPublishers: 0,
      totalCategories: 0,
    },
  }),
  getters: {
    getStatistics: (state) => {
      return state.Statistics;
    },
  },
  actions: {
    increaseBooks() {
      this.Statistics.totalBooks++;
    },
    increaseAuthors() {
      this.Statistics.totalAuthors++;
    },
    increasePublishers() {
      this.Statistics.totalPublishers++;
    },
    increaseCategories() {
      this.Statistics.totalCategories++;
    },
  },
});
