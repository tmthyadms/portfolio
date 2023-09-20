<template>
  <div class="card">
    <figure>
      <img src="https://placehold.co/372" :alt="title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div v-if="newProject" class="badge badge-secondary-theme">NEW</div>
      </h2>
      <p>{{ desc }}</p>
      <div class="card-actions justify-end">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="badge badge-outline"
        >
          {{ badge }}
        </div>
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
