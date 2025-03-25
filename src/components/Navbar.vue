<template>
  <BNavbar toggable="md" :type="variant" :variant="color" class="px-4 ">
    <BNavbarBrand :to="{name:logoHref}">{{ logoText }}</BNavbarBrand>
    <BNavbarNav>
      <BNavItem
        v-for="link in navLinks"
        :key="link.href"
        :to="{name:link.href}"
        >{{ link.text }}</BNavItem
      >
    </BNavbarNav>
  </BNavbar>
</template>

<script>
export default {
  props: {
    logoText: { type: String, default: "My Site" },
    logoHref: { type: String, default: "Home" },
    navLinks: { type: Array, default: () => [] },
    variant: { type: String, default: "dark" },
    color: { type: String, default: "info" },
    base: { type: String, default: "/Vue-Template-Project" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
