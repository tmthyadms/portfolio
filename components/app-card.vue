<template>
  <div class="card max-w-sm md:max-w-none max-h-96 bg-base-100 shadow-xl">
    <figure>
      <img src="https://placehold.co/512" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div v-if="newProject" class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{ desc }}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{{ badges[0] }}</div>
        <div class="badge badge-outline">{{ badges[1] }}</div>
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
      required: true,
    },
    newProject: {
      type: Boolean,
      default: false,
    },
    badges: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
