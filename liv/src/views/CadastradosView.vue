<script>
import navComp from "../components/nav.vue";
import bookComp from "../components/cards/bookComp.vue";
import authorComp from "../components/cards/authorComp.vue";
import publisherComp from "../components/cards/publisherComp.vue";
import categoryComp from "../components/cards/categoryComp.vue";

import { useBookStore } from "../stores/livros";
import { useAuthorStore } from "../stores/autores";
import { useCategoryStore } from "../stores/categorias";
import { usePublisherStore } from "../stores/editoras";

export default {
  components: {
    navComp,
    bookComp,
    authorComp,
    publisherComp,
    categoryComp,
  },
  setup() {
    const store = {
      livros: useBookStore(),
      autores: useAuthorStore(),
      categorias: useCategoryStore(),
      editoras: usePublisherStore(),
    };
    return {
      store,
    };
  },
};
</script>

<template>
  <navComp />
  <div class="bg-zinc-700">
    <div class="flex justify-between p-3">
      <div v-for="book in this.store.livros.listOfBooks">
        <bookComp v-bind:book="book" />
      </div>
    </div>

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex flex-wrap p-3">
      <div class="mx-5" v-for="author in this.store.autores.listOfAuthors">
        <authorComp v-bind:Author="author" />
      </div>
    </div>

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex flex-auto p-3">
      <div
        class="mx-5"
        v-for="publisher in this.store.editoras.listOfPublishers"
      >
        <publisherComp v-bind:Publisher="publisher" />
      </div>
    </div>

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex flex-auto p-3">
      <div
        class="mx-5"
        v-for="category in this.store.categorias.listOfCategories"
      >
        <categoryComp v-bind:Category="category" />
      </div>
    </div>
  </div>

  <footer class="text-center bg-gray-900 text-white">
    <div class="container px-6 pt-6">
      <div class="flex justify-center mb-6"></div>
    </div>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-whitehite" href="https://tailwind-elements.com/"
        >Livraria do Geraldo</a
      >
    </div>
  </footer>
</template>
