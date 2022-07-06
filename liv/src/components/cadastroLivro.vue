<script>
import { usePublisherStore } from "../stores/editoras";
import { useAuthorStore } from "../stores/autores";
import { useCategoryStore } from "../stores/categorias";

import { useBookStore } from "../stores/livros";
import { v4 } from "uuid";

export default {
  setup() {
    const store = useBookStore();

    const selectStores = {
      publisherStore: usePublisherStore(),
      authorStore: useAuthorStore(),
      categoryStore: useCategoryStore(),
    };

    return {
      store,
      selectStores,
    };
  },
  data() {
    return {
      Title: "",
      Desc: "",
      selectedPublisher: null,
      selectedAuthor: null,
      selectedCategory: null,
    };
  },
  methods: {
    createBook() {
      if (
        !this.Title ||
        !this.Desc ||
        !this.selectedPublisher ||
        !this.selectedAuthor ||
        !this.selectedCategory
      ) {
        alert("Preencha todos os campos");
        return;
      }

      this.store.createNewBook({
        Title: this.Title,
        Desc: this.Desc,
        Author: this.selectedAuthor,
        Category: this.selectedCategory,
        Publisher: this.selectedPublisher,
        id: v4(),
      });

      this.Title = "";
      this.Desc = "";
      this.selectedPublisher = null;
      this.selectedAuthor = null;
      this.selectedCategory = null;

      for (let i = 0; i < this.store.listOfBooks.length; i++) {
        console.log(i + "" + this.store.listOfBooks[i].Title);
        console.log("-----------------");
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center p-3">
    <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
      <h1 class="flex justify-center pb-6 text-2xl text-white">Livro</h1>
      <div>
        <div class="form-group mb-6">
          <label
            for="Author name"
            class="form-label inline-block mb-2 text-white"
            >Nome do Livro
          </label>
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-describedby="emailHelp"
            placeholder="Nome"
            v-model="Title"
          />
        </div>

        <div class="form-group mb-6">
          <label for="Category" class="form-label inline-block mb-2 text-white"
            >Descrição do livro</label
          >
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Descrição"
            v-model="Desc"
          ></textarea>
        </div>

        <div class="form-group mb-6">
          <label for="Category" class="form-label inline-block mb-2 text-white"
            >Autor</label
          >
          <select
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="autores"
            v-model="selectedAuthor"
          >
            <option v-for="author in selectStores.authorStore.listOfAuthors">
              {{ author.name }}
            </option>
          </select>
        </div>

        <div class="form-group mb-6">
          <label for="Category" class="form-label inline-block mb-2 text-white"
            >Categoria</label
          >
          <select
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="autores"
            v-model="selectedCategory"
          >
            <option
              v-for="category in selectStores.categoryStore.listOfCategorys"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="form-group mb-6">
          <label for="Category" class="form-label inline-block mb-2 text-white"
            >Editora</label
          >
          <select
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="autores"
            v-model="selectedPublisher"
          >
            <option
              v-for="publisher in selectStores.publisherStore.listOfPublishers"
            >
              {{ publisher.name }}
            </option>
          </select>
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
