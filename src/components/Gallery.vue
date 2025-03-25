<template>
  <BContainer fluid>
    <BRow >
      <BCol v-for="(imageUrl, index) in images" :key="index" class="text-center">
        <BImg :src="imageUrl" fluid alt="Gallery Image" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
