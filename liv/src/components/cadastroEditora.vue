<script>
import { usePublisherStore } from "../stores/editoras";
import { v4 } from "uuid";

export default {
  setup() {
    const store = usePublisherStore();
    return {
      store,
    };
  },
  data() {
    return {
      NameOfPublisher: "",
      website: "",
    };
  },
  methods: {
    createPublisher() {
      if (!this.NameOfPublisher || !this.website) {
        alert("Preencha todos os campos");
        return;
      }

      this.store.createNewPublisher({
        name: this.NameOfPublisher,
        site: this.website,
        id: v4(),
      });

      this.NameOfPublisher = "";
      this.website = "";

      for (let i = 0; i < this.store.listOfPublishers.length; i++) {
        console.log(
          i +
            "" +
            this.store.listOfPublishers[i].name +
            "" +
            this.store.listOfPublishers[i].site
        );
        console.log("-----------------");
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center p-3">
    <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
      <h1 class="flex justify-center pb-6 text-2xl text-white">Editora</h1>
      <div>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail1"
            class="form-label inline-block mb-2 text-white"
            >Nome da Editora
          </label>
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nome"
            v-model="NameOfPublisher"
          />
        </div>
        <div class="form-group mb-6">
          <label for="website" class="form-label inline-block mb-2 text-white"
            >Site</label
          >
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="website"
            placeholder="Site"
            v-model="website"
          />
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="createPublisher"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
