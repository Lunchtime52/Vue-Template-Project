<template>
  <b-card
    :img-src="imgSrc"
    :img-alt="imgAlt"
    :img-top="imgTop"
    :class="cardClass"
  >
    <b-card-title :style="{ fontSize: titleSize }">{{ title }}</b-card-title>
    <b-card-text :style="{ fontSize: textSize }">{{ text }}</b-card-text>
    <slot></slot>
    <b-button v-if="buttonText" :variant="buttonVariant" :to="{name:buttonHref}">{{
      buttonText
    }}</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Card Title" },
    text: { type: String, default: "Some example text." },
    imgSrc: { type: String, default: null },
    imgAlt: { type: String, default: null },
    imgTop: { type: Boolean, default: true },
    buttonText: { type: String, default: null },
    buttonVariant: { type: String, default: "primary" },
    buttonHref: { type: String, default: "NotFound" },
    cardClass: { type: String, default: "border border-info" },
    titleSize: { type: String, default: "1.5rem" },
    textSize: { type: String, default: "1rem" },
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles here */
</style>
