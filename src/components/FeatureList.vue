<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div class="text-blue-500 mb-4 text-4xl">
        <span :class="[feature.icon]"></span>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
      <p class="text-gray-600 text-center">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>