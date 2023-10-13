<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="fallbackHeight"
    :fill="fill"
    class="bi bi-caret-left-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16,
    },
    height: {
      type: Number,
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    fallbackHeight() {
      return this.height || this.width;
    },
  },
};
</script>
