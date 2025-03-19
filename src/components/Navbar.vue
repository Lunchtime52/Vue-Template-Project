<template>
  <BNavbar toggable="md" :type="variant" :variant="color" class="px-4 mb-2">
    
    <BNavbarBrand :href="logoHref">{{ logoText }}</BNavbarBrand>
    <BNavbarNav>
      <BNavItem v-for="link in navLinks" :key="link.href" :to="base.concat(link.page)">{{
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
    base:{type:String,default:"/Vue-Template-Project"}
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
