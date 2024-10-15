<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

let sideNav;
const router = useRouter();
let closeIcon = document.getElementsByClassName("closeIcon");
let menuIcon = document.getElementsByClassName("menuIcon");
onMounted(() => {
  sideNav = document.getElementById("side-nav");
  window.addEventListener("resize", () => {
    sideNav.classList.remove("open");
  });
  router.afterEach(() => {
    sideNav.classList.remove("open");
  });
});
function menuToggle() {
  sideNav.classList.toggle("open");
  menuIcon.classList.toggle("red");
}

defineExpose({ menuToggle });
</script>

<template>
  <nav>
    <!-- Main navigation container -->
    <div>
      <img id="logo" src="/public/vite.svg" alt="Logo" />
      <!-- <button id="menu-btn" @click="menuToggle"> -->
      <button class="hamburger" @click="menuToggle">
        <!-- material icons https://material.io/resources/icons/ -->
        <i class="menuIcon material-icons">menu</i>
        <i class="closeIcon material-icons">close</i>
      </button>
      <div>
        <!-- Container for main menu links -->
        <ul class="navLinks">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
        </ul>
      </div>
    </div>
    <div id="side-nav">
      <!-- Side navigation container, initially hidden -->
      <ul class="menu">
        <!-- List of side navigation links -->
        <li><RouterLink to="/" class="menuItem">Home</RouterLink></li>
        <li><RouterLink to="/contact" class="menuItem">Contact</RouterLink></li>
        <li>
          <RouterLink to="/services" class="menuItem">Services</RouterLink>
        </li>
        <!-- ... more navigation links -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Styles for the main navigation bar */
nav {
  padding: 10px; /* Add padding to top and bottom */
  width: 100%; /* Make the navigation bar take full width */
  position: fixed; /* Fix the navigation bar to the top */
  top: 0; /* Position at the very top */
  height: 60px; /* Set height of the navigation bar */
  background-color: grey; /* Set background color using a variable */
  align-content: center;
  /* Align items to the center vertically */
  border-bottom: 3px solid var(--secondary-color); /* Add a bottom border */
  /* border-radius: 0 0 10px 10px; Round the bottom corners */
  text-align: center; /* Center align text within the navigation bar */
}

/* Styles for the logo */
#logo {
  float: left;
  margin-left: 25%;
  /* Push the logo to the left */
}

/* Styles for the menu items */
.navLinks {
  float: right;
  margin-right: 10%;
  /* Push the menu items to the right */
  display: inline-flex;
  /* Display menu items in a line */
  gap: 15px; /* Set spacing between menu items */
}

.hamburger {
  float: right; /* Float the button to the right */
  margin-right: 15%;
  display: none;
}
.closeIcon {
  display: none;
}
.red {
  background-color: red;
}

ul {
  list-style: none;
}
#side-nav ul li {
  margin-top: 40px;
}

/* Styles for the side navigation panel */
#side-nav {
  position: fixed; /* Fix the side navigation to the viewport */
  border: 2px solid red;
  border-radius: 10px; /* Round the corners */
  text-align: center; /* Center align text within the side navigation */
  top: 74px; /* Position below the main navigation bar */

  right: -350px;
  /* Initially position off-screen to the right */

  min-width: 50%;

  height: 100%; /* Make the side navigation take full height */
  background-color: grey; /* Set background color using a variable */
  transition: right 0.3s ease; /* Add a smooth transition for opening/closing */
  /* Smooth transition for opening/closing */
  z-index: 100;

  display: none;
  /* Initially hide the side navigation */
}

/* Styles for the open state of the side navigation */
#side-nav.open {
  right: 0; /* Slide in from the right when open */
}

/* Media query for smaller screens (below 700px width) */
@media screen and (max-width: 700px) {
  .navLinks {
    display: none;
  }
  .hamburger {
    display: flex; /* Show the menu button */
  }
  #side-nav {
    display: block;
  }
}
</style>
