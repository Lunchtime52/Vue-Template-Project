<script setup></script>

<template>
  <Nav></Nav>
  <div id="pageview">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style scoped>
#pageview {
  margin: 75px 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
