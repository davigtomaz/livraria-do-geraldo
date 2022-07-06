<script>
import { useAuthorStore } from "../stores/autores";
import { v4 } from "uuid";

export default {
  setup() {
    const store = useAuthorStore();
    return {
      store,
    };
  },
  data() {
    return {
      NameOfAuthor: "",
    };
  },
  methods: {
    createAuthor() {
      if (!this.NameOfAuthor) {
        alert("Preencha todos os campos");
        return;
      }

      this.store.createNewAuthor({ name: this.NameOfAuthor, id: v4() });
      this.NameOfAuthor = "";
      for (let i = 0; i < this.store.listOfAuthors.length; i++) {
        console.log(i + "" + this.store.listOfAuthors[i].name);
        console.log("-----------------");
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center p-3">
    <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
      <h1 class="flex justify-center pb-6 text-2xl text-white">Autor</h1>
      <div>
        <div class="form-group mb-6">
          <label
            for="Author name"
            class="form-label inline-block mb-2 text-white"
            >Nome do Autor(a)
          </label>
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-describedby="emailHelp"
            placeholder="Nome"
            v-model="NameOfAuthor"
          />
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="createAuthor"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
