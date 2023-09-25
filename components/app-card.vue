<template>
  <div class="card">
    <figure v-if="imgSrc">
      <img :src="imgSrc" :alt="title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div v-if="badge" class="badge badge-primary">{{ badge }}</div>
      </h2>
      <p>{{ desc }}</p>
      <div class="card-actions justify-end">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="badge badge-outline badge-primary"
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
    imgSrc: {
      type: String,
    },
    badge: {
      type: String,
    },
    badges: {
      type: Array,
      required: true,
    },
  },
};
</script>
