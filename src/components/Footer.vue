<template>
  <footer :class="`text-center py-${padding} bg-${background}`">
    <p>{{ copyright }}</p>
    <div v-if="footerLinks.length">
      <a
        v-for="link in footerLinks"
        :key="link.href"
        :href="link.href"
        class="mx-2"
        >{{ link.text }}</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    copyright: {
      type: String,
      default: `© ${new Date().getFullYear()} Ryan Buchanan. All rights reserved.`,
    },
    padding: { type: Number, default: 4 },
    background: { type: String, default: "info" },
    footerLinks: { type: Array, default: () => [] },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
