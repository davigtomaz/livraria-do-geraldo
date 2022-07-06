<script>
export default {
  props: {
    Publisher: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="bg-indigo-900 block p-6 rounded-lg shadow-lg max-w-sm">
      <h5 class="text-white text-xl leading-tight font-medium mb-2">
        {{ Publisher.name }}
      </h5>
      <a href="#" class="text-white text-base mb-4 p-4">{{ Publisher.site }}</a>
    </div>
  </div>
</template>
