<template>
  <div>
    <Navbar
      logoText="My Awesome Site"
      :navLinks="[
        { text: 'Home', href: '#' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ]"
    />

    <Hero
      title="Welcome to Our Site!"
      subtitle="Test"
      buttonText="Explore Now"
      buttonHref="/about"
      background="light"
      padding="4"
    />

    <ImageWithText
      imageUrl="https://via.placeholder.com/800x400"
      title="Our Featured Product"
      text="This is a brief description of our featured product. It's awesome!"
      imageClass="col-md-6"
      textClass="col-md-6"
    />

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="n in 3" :key="n">
          <Card
            title="Card Title"
            text="Quick example text."
            imgSrc="https://via.placeholder.com/300x200"
            imgAlt="Card Image"
            buttonText="Read More"
            buttonHref="/card-details"
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
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import ImageWithText from "../components/ImageWithText.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    ImageWithText,
    Card,
    Footer,
  },
};
</script>
