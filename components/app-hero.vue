<template>
  <div class="hero min-h-screen bg-base-theme">
    <div class="hero-content flex-col text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold pb-6">{{ title }}</h1>
        <p>
          {{ desc }}
        </p>
      </div>
      <div class="max-w-3xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
