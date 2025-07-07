<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  src: String,
  fallback: {
    type: String,
    default: "@//images/neutral.png",
  },
  alt: {
    type: String,
    default: "",
  },
});

const actualImage = ref(props.src);

const setFallback = () => {
  actualImage.value = props.fallback;
};

watch(
  () => props.src,
  (newVal) => {
    actualImage.value = newVal;
  }
);
</script>

<template>
  <img :src="actualImage" :alt="alt" @error="setFallback" />
</template>
