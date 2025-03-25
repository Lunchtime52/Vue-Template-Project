<template>
  <Navbar
    logoText="My Awesome Site"
    :navLinks="[
      { text: 'Home', href: 'Home' },
      { text: 'About', href: 'About' },
      { text: 'Contact', href: 'Contact' },
    ]"
  />
  <div class="mx-auto container">
    <router-view></router-view>
  </div>
  <Footer
    :footerLinks="[
      // { text: 'Privacy', href: '/privacy' },
      // { text: 'Terms', href: '/terms' },
    ]"
  />
</template>

<style scoped></style>
