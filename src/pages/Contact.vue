<template>
  <div>
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
            imageUrl="https://placehold.co/400x300"
            title="Our Mission"
            text="Our mission is to make the world a better place."
          />
        </div>
        <div class="col-md-6">
          <ImageWithText
            imageUrl="https://placehold.co/400x300"
            title="Our Values"
            text="We value integrity, innovation, and customer satisfaction."
          />
        </div>
      </div>
    </div>
    <div class="container">
      <ContactForm
        title="Contact Us"
        buttonText="Submit"
        buttonHref="/contact"
      />
    </div>
  </div>
</template>

<script>
import ImageWithText from "../components/ImageWithText.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ImageWithText,
    ContactForm,
  },
};
</script>
