<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg bg-indigo-900"
  >
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-white text-xl font-medium mb-2">
        {{ book.Title }}
      </h5>
      <p class="text-white text-base mb-4">
        {{ book.Desc }}
      </p>
      <p class="text-white text-xs">{{ book.Author }}</p>
      <p class="text-white text-xs">{{ book.Publisher }}</p>
      <p class="text-white text-xs">{{ book.Category }}</p>
    </div>
  </div>
</template>
