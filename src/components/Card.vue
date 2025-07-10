<template>
  <div v-if="imgSrc || imgAlt || imgTop" :class="['customMargin', cardMargin]">
    <template >
      <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :top="imgTop" fluid />
    </template>
    <h5 :class="`fs-${titleScale}`">{{ title }}</h5>
    <p :class="`fs-${textScale}`">{{ text }}</p>
    <slot></slot>
    <button
      v-if="buttonText"
      :variant="buttonVariant"
      :to="{ name: buttonHref }">
      {{ buttonText }}
    </button>
  </div>
  <div v-else :class="['customMargin', cardMargin]">
    <h5>:class="`fs-${titleScale}`">{{ title }}</h5>
    <p :class="`fs-${textScale}`">{{ text }}</p>
    <slot></slot>
    <button
      v-if="buttonText"
      :variant="buttonVariant"
      :to="{ name: buttonHref }">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Card Title" },
    text: { type: String, default: "Some example text." },
    imgSrc: { type: String, required: false },
    imgAlt: { type: String, required: false },
    imgTop: { type: Boolean, default: false },
    buttonText: { type: String, required: false },
    buttonVariant: { type: String, default: "success" },
    buttonHref: { type: String, default: "NotFound" },
    titleScale: { type: Number, default: 4 },
    textScale: { type: Number, default: 5 },
    cardMargin: { type: String, default: "" },
  },
};
</script>
