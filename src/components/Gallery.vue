<template>
  <div class="container-fluid p-2">
    <div class="row">
      <div v-for="(imageUrl, index) in images" :key="index" class="col text-center">
        <img
          :src="imageUrl"
          alt="Gallery Image"
          :class="['customMargin', galleryMargin]"
        />
      </div>
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
  galleryMargin: { type: String, default: "mb-4" },
});
</script>
