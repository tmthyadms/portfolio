<template>
  <div class="card glass max-w-sm md:max-w-md lg:max-w-md">
    <div class="card-body">
      <h2 class="card-title">
        <span class="card-text">{{ title }}</span>
        <div v-if="badge" class="badge badge-primary">{{ badge }}</div>
        <div v-if="info" class="ml-auto">
          <span class="tooltip tooltip-left font-normal" :data-tip="info">
            <SvgInfoCircle />
          </span>
        </div>
      </h2>
      <p class="card-text text-xs text-start opacity-60">{{ desc }}</p>
      <div class="card-actions justify-center">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="badge badge-sm badge-outline badge-primary"
        >
          {{ badge }}
        </div>
      </div>
    </div>
    <figure v-if="imgSrc" class="card-figure">
      <img
        :src="imgSrc"
        :alt="title"
        class="rounded-[var(--rounded-box)] border border-base-content border-opacity-5 object-scale-down"
      />
    </figure>
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
    info: {
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

<style scoped>
.card-figure {
  @apply px-[var(--padding-card,_2rem)] pb-[var(--padding-card,_2rem)];
}

[data-theme="coffee"] .card-text {
  @apply text-neutral-content;
}
</style>
