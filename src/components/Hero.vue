<template>
  <div
    :class="`p-${padding} bg-${background} custom-vh-75 text-white hero text-center`"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="hero-overlay ">
      <h1 :style="{ fontSize: titleSize }">{{ title }}</h1>
      <p :style="{ fontSize: subtitleSize }">{{ subtitle }}</p>
      <BButton
        :variant="buttonVariant"
        :size="buttonSize"
        :to="{ name: buttonHref }"
      >
        {{ buttonText }}
      </BButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "Welcome!" },
  subtitle: { type: String, default: "A simple hero unit." },
  buttonText: { type: String, default: "Learn More" },
  buttonVariant: { type: String, default: "primary" },
  buttonSize: { type: String, default: "md" },
  buttonHref: { type: String, default: "Contact" },
  padding: { type: Number, default: 5 },
  background: { type: String, default: "light" },
  titleSize: { type: String, default: "3rem" },
  subtitleSize: { type: String, default: "1.5rem" },
  imageUrl: { type: String, required: false },
});
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  position: relative;
}
.custom-vh-75 {
  height: 75vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
</style>
