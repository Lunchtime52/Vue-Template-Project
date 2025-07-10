<template>
  <div class="container section-padding">
    <div class="bg-light p-5 rounded-lg shadow-md text-center">
      <h2 class="fs-3 fw-bold text-dark mb-4">{{ title }}</h2>
      <p class="text-secondary mb-6">{{ description }}</p>
      <router-link :to="{name:buttonLink}" class="btn btn-primary text-white fw-bold py-2 px-4 rounded-pill btn-lg">{{ buttonText }}</router-link>
    </div>
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
      default: 'Contact',
    },
  },
};
</script>