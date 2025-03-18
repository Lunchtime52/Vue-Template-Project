<template>
  <Navbar
    logoText="My Awesome Site"
    :navLinks="[
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ]"
  />
  <div id="pageview">
    <router-view></router-view>
  </div>

  <Footer
    :footerLinks="[
      // { text: 'Privacy', href: '/privacy' },
      // { text: 'Terms', href: '/terms' },
    ]"
  />
</template>

<style scoped>

</style>
