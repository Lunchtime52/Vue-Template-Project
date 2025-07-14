<template>
  <BNavbar toggleable="md" :type="variant" :variant="color" class="px-5" sticky="top">
    <BNavbarBrand :to="{ name: logoHref }">{{ logoText }}</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto text-end">
        <BNavItem
          v-for="link in navLinks"
          :key="link.href"
          :to="{ name: link.href }"
          >{{ link.text }}
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
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
    //change with base form config.js
    base: { type: String, default: "/Vue-Template-Project" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
