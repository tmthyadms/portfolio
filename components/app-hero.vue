<template>
  <div class="hero min-h-screen">
    <div
      class="hero-content flex-col"
      :class="{
        'text-center': center,
        'flex-col lg:flex-row-reverse text-center lg:text-left': !center,
      }"
    >
      <slot v-if="!center" name="figure"></slot>
      <div>
        <div class="mx-auto max-w-md">
          <slot name="title">
            <h1
              v-if="title"
              class="text-3xl md:text-4xl lg:text-5xl font-bold capitalize"
              :class="desc ? 'mb-4' : 'mb-6'"
            >
              {{ title }}
            </h1>
          </slot>
          <p
            v-if="desc"
            class="mb-6 text-sm md:text-base lg:text-2xl opacity-60"
            v-html="desc"
          ></p>
        </div>
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
    center: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
