<script>
export default {
  props: {
    Author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
    <h1 class="flex justify-center pb-6 text-2xl text-white">
      {{ Author.name }}
    </h1>
    <div>
      <button
        type="submit"
        class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
        @click="alert(Author.id)"
      >
        Ver Mais
      </button>
    </div>
  </div>
</template>
