<template>
  <div class="row align-items-center">
    <div :class="imageClass">
      <img :src="imageUrl" class="img-fluid" :alt="imageAlt" />
    </div>
    <div :class="textClass">
      <h2 :style="{ fontSize: titleSize }">{{ title }}</h2>
      <p :style="{ fontSize: textSize }">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: { type: String, default: "https://placehold.co/600x400" },
    imageAlt: { type: String, default: "Placeholder" },
    title: { type: String, default: "Title" },
    text: { type: String, default: "Lorem ipsum... Some example Text to go with the Image" },
    imageClass: { type: String, default: "col-md-6" },
    textClass: { type: String, default: "col-md-6" },
    titleSize: { type: String, default: "2rem" },
    textSize: { type: String, default: "1rem" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
