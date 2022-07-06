<script>
export default {
  props: {
    Category: {
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
        {{ Category.name }}
      </h5>
      <p class="text-white text-base mb-4">
        {{ Category.desc }}
      </p>
    </div>
  </div>
</template>
