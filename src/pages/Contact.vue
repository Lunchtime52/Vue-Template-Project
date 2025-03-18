<template>
  <div>
    <Navbar
      logoText="My Awesome Site"
      :navLinks="[
        { text: 'Home', href: '/' },
        { text: 'About', href: '#' },
        { text: 'Contact', href: '/contact' },
      ]"
    />

    <div class="container mt-5">
      <h1>About Us</h1>
      <p>
        We are a company dedicated to providing high-quality products and
        services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div class="row mt-4">
        <div class="col-md-6">
          <ImageWithText
            imageUrl="https://via.placeholder.com/400x300"
            title="Our Mission"
            text="Our mission is to make the world a better place."
          />
        </div>
        <div class="col-md-6">
          <ImageWithText
            imageUrl="https://via.placeholder.com/400x300"
            title="Our Values"
            text="We value integrity, innovation, and customer satisfaction."
          />
        </div>
      </div>
    </div>

    <Footer
      :footerLinks="[
        { text: 'Privacy', href: '/privacy' },
        { text: 'Terms', href: '/terms' },
      ]"
    />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import ImageWithText from "./ImageWithText.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Navbar,
    ImageWithText,
    Footer,
  },
};
</script>
