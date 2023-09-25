<template>
  <div class="hero min-h-screen bg-base-theme">
    <div class="hero-content flex-col text-center">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold pb-6">{{ title }}</h1>
        <p v-if="desc">
          {{ desc }}
        </p>
      </div>
      <div>
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
    },
    desc: {
      type: String,
    },
  },
};
</script>
