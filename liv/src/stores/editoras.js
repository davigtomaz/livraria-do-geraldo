import { defineStore } from "pinia";
import { useStatisticsStore } from "./statistics";
import { v4 } from "uuid";

export const usePublisherStore = defineStore("Publisher", {
  id: "Publisher",
  state: () => ({
    listOfPublishers: [
      { name: "Editora Venâncio Literaturas", site: "venancio.net", id: v4() },
    ],
  }),
  getters: {
    getPublisher: (state) => {
      return state.listOfPublishers;
    },
  },
  actions: {
    createNewPublisher(name) {
      const store = useStatisticsStore();
      store.increasePublishers();
      this.listOfPublishers.push(name);
    },
  },
});
