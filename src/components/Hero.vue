<template>
  <div :class="` text-center p-${padding} bg-${background} vh-75`">
    <h1 :style="{ fontSize: titleSize }">{{ title }}</h1>
    <p :style="{ fontSize: subtitleSize }">{{ subtitle }}</p>
    <BButton :variant="buttonVariant" :size="buttonSize" :to="{name:buttonHref}">{{
      buttonText
    }}</BButton>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Welcome!" },
    subtitle: { type: String, default: "A simple hero unit." },
    buttonText: { type: String, default: "Learn More" },
    buttonVariant: { type: String, default: "primary" },
    buttonSize: { type: String, default: "md" },
    buttonHref: { type: String, default: "Contact" },
    padding: { type: Number, default: 5 },
    background: { type: String, default: "light" },
    titleSize: { type: String, default: "3rem" },
    subtitleSize: { type: String, default: "1.25rem" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
