<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
    <img v-if="image" :src="image" :alt="author" class="w-24 h-24 rounded-full object-cover mb-4" />
    <blockquote class="text-gray-700 text-center mb-4">
      <p class="italic">"{{ quote }}"</p>
    </blockquote>
    <p class="text-gray-600 font-semibold">{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>