<template>
  <BNavbar toggable="md" :type="variant" :variant="color">
    <BNavbarBrand :href="logoHref">{{ logoText }}</BNavbarBrand>
    <BNavbarNav>
      <BNavItem v-for="link in navLinks" :key="link.href" :href="link.href">{{
        link.text
      }}</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<script>
export default {
  props: {
    logoText: { type: String, default: "My Site" },
    logoHref: { type: String, default: "/" },
    navLinks: { type: Array, default: () => [] },
    variant: { type: String, default: "dark" },
    color: { type: String, default: "info" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
