<template>
  <div class="bg-gray-100 p-8 rounded-lg shadow-md text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ title }}</h2>
    <p class="text-gray-700 mb-6">{{ description }}</p>
    <BButton :href="buttonLink" variant="primary" class="text-white font-bold py-2 px-4 rounded btn-lg">
      {{ buttonText }}
    </BButton>
  </div>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    title: {
      type: String,
      default: 'Sign up today!',
    },
    description: {
      type: String,
      default: 'Join our community and start learning',
    },
    buttonText: {
      type: String,
      default: 'Sign up',
    },
    buttonLink: {
      type: String,
      default: '/',
    },
  },
};
</script>