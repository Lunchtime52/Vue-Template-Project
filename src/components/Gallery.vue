<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(imageUrl, index) in images" :key="index" class="w-full">
      <img :src="imageUrl" alt="Gallery Image" class="w-full h-auto object-cover rounded-lg shadow-md" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>