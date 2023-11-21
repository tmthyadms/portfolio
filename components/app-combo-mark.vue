<template>
  <button
    class="flex items-center gap-1.5 text-lg md:text-xl font-bold"
    @click="scrollToTop"
  >
    <span
      >T<span class="lg:max-xl:hidden inline">imothy&nbsp;</span
      ><span class="text-accent"
        >A<span class="lg:max-xl:hidden inline">dams</span></span
      ></span
    >
    <IconPatchCheck class="fill-info" />
  </button>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>
