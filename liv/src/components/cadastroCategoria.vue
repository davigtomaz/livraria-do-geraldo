<script>
import { useCategoryStore } from "../stores/categorias";
import { v4 } from "uuid";

export default {
  setup() {
    const store = useCategoryStore();
    return {
      store,
    };
  },
  data() {
    return {
      NameOfCategory: "",
      categoryDesc: "",
    };
  },
  methods: {
    createCategory() {
      this.store.createNewCategory({
        name: this.NameOfCategory,
        desc: this.categoryDesc,
        id: v4(),
      });

      this.NameOfCategory = "";
      this.categoryDesc = "";

      for (let i = 0; i < this.store.listOfCategorys.length; i++) {
        console.log(
          i +
            "" +
            this.store.listOfCategorys[i].name +
            "" +
            this.store.listOfCategorys[i].desc
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
      <h1 class="flex justify-center pb-6 text-2xl text-white">Categoria</h1>
      <div>
        <div class="form-group mb-6">
          <label for="name" class="form-label inline-block mb-2 text-white"
            >Nome da categoria
          </label>
          <input
            type="name"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nome"
            v-model="NameOfCategory"
          />
        </div>

        <div class="form-group mb-6">
          <label for="Category" class="form-label inline-block mb-2 text-white"
            >Descrição da Categoria</label
          >
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Descrição"
            v-model="categoryDesc"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="createCategory"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
