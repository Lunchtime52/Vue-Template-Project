<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

let sideNav;
const router = useRouter();
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
  sideNav.toggleAttribute("hidden");
  // const reflow = element.offsetHeight;

  sideNav.classList.toggle("open");
}
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    if (screen.width > 700) {
      sideNav.classList.remove("open");
    }
  });
});
defineExpose({ menuToggle });
</script>

<template>
  <nav>
    <!-- Main navigation container -->
    <div>
      <!-- Container for logo and main menu items -->
      <img id="logo" src="/public/vite.svg" alt="" />
      <!-- Logo image -->
      <button id="menu-btn" @click="menuToggle">
        <!-- Hamburger menu button, toggles side navigation -->
        <font-awesome-icon icon="fas fa-bars" />
        <!-- Font Awesome icon for menu bars -->
      </button>
      <div class="menu-item">
        <!-- Container for main menu links -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
      </div>
    </div>
    <div id="side-nav" hidden>
      <!-- Side navigation container, initially hidden -->
      <ul>
        <!-- List of side navigation links -->
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/services">Services</RouterLink></li>
        <!-- ... more navigation links -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Styles for the main navigation bar */
nav {
  padding: 10px 0; /* Add padding to top and bottom */
  width: 100%; /* Make the navigation bar take full width */
  position: fixed; /* Fix the navigation bar to the top */
  top: 0; /* Position at the very top */
  height: 60px; /* Set height of the navigation bar */
  background-color: var(--bgcolor); /* Set background color using a variable */
  align-content: center; /* Align items to the center vertically */
  border-bottom: 3px solid var(--secondary-color); /* Add a bottom border */
  /* border-radius: 0 0 10px 10px; Round the bottom corners */
  text-align: center; /* Center align text within the navigation bar */
}

/* Styles for the container within the navigation bar */
nav > div {
  justify-content: center; /* Center align items horizontally */
  align-items: center; /* Center align items vertically */
}

/* Styles for the logo */
#logo {
  /* float: left; */
  margin-right: 15%; /* Push the logo to the left */
}

/* Styles for the menu items */
.menu-item {
  /* float: right; */
  margin-left: 15%; /* Push the menu items to the right */
  display: inline-block; /* Display menu items in a line */
  gap: 1.5rem; /* Set spacing between menu items */
  color: var(--txtcolor); /* Set text color using a variable */
}

/* Styles for the navigation button */
nav button {
  float: right; /* Float the button to the right */
  margin-right: 15%; /* Add right margin to the button */
  font-size: 1.45rem; /* Set font size of the button text */
}

/* Styles for the menu button (hidden by default) */
#menu-btn {
  display: none;
}

/* Styles for the unordered list within the side navigation */
#side-nav ul {
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
  margin-top: 50px; /* Add top margin */
}

/* Styles for the list items within the side navigation */
#side-nav li {
  /* padding-top: 10px; */
  margin: 20px 0; /* Add top and bottom margin to list items */
}

/* Styles for the side navigation panel */
#side-nav {
  position: fixed; /* Fix the side navigation to the viewport */
  border: 2px solid var(--secondary-color); /* Add a border */
  border-radius: 10px; /* Round the corners */
  text-align: center; /* Center align text within the side navigation */
  top: 74px; /* Position below the main navigation bar */
  right: -350px; /* Initially position off-screen to the right */
  /* Initially off-screen */
  min-width: 50%; /* Set minimum width */
  height: 100%; /* Make the side navigation take full height */
  background-color: var(--bgcolor); /* Set background color using a variable */
  transition: right 0.3s ease; /* Add a smooth transition for opening/closing */
  /* Smooth transition for opening/closing */
  z-index: 100; /* Ensure it's above other content */
  /* Ensure it's above other content */
  display: none; /* Initially hide the side navigation */
}

/* Styles for the open state of the side navigation */
#side-nav.open {
  right: 0; /* Slide in from the right when open */
}

/* Media query for smaller screens (below 700px width) */
@media screen and (max-width: 700px) {
  .menu-item {
    display: none; /* Hide the menu items */
  }
  #menu-btn {
    display: inline; /* Show the menu button */
  }
  #side-nav {
    display: block; /* Show the side navigation */
  }
  #logo {
    float: left; /* Float the logo to the left */
    margin-left: 10rem; /* Add left margin to the logo */
  }
}
</style>