<template>
  <div>
    <Hero
      title="Welcome to Our Site!"
      subtitle="Sample Subtitle"
      buttonText="Explore Now"
      buttonHref="/contact"
      background="light"
      :padding = "4"
    />

    <ImageWithText
      imageUrl="https://placehold.co/800x400"
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
            imgSrc="https://placehold.co/300x200"
            imgAlt="Card Image"
            buttonText="Read More"
            buttonHref="/card-details"
          />
        </div>
      </div>
    </div>
    <FeatureList
      :features="[
        { title: 'Feature 1', description: 'Description for Feature 1' },
        {
          title: 'Feature 2',
          description: 'Description for Feature 2',
          icon: 'bi-check-circle-fill',
        },
        {
          title: 'Feature 3',
          description: 'Description for Feature 3',
          icon: 'bi-check-circle-fill',
        },
      ]"
    />
    <Gallery
      :images="['https://placehold.co/300x400', 'https://placehold.co/300x400']"
    />

    <Testimonial
      quote="This is a sample testimonial quote."
      author="John Doe"
      image="https://placehold.co/100x100"
    />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import ImageWithText from "../components/ImageWithText.vue";
import Card from "../components/Card.vue";
import FeatureList from "../components/FeatureList.vue";
import Gallery from "../components/Gallery.vue";
import Testimonial from "../components/Testimonial.vue";

export default {
  components: {
    Hero,
    ImageWithText,
    Card,
    FeatureList,
    Gallery,
    Testimonial,
  },
};
</script>
