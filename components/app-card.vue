<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div v-if="badge" class="badge badge-primary">
          {{ badge }}
        </div>
        <div v-if="info" class="ml-auto">
          <span class="tooltip tooltip-left font-normal" :data-tip="info">
            <SvgInfoCircleFill />
          </span>
        </div>
      </h2>
      <p class="text-xs text-start opacity-60">{{ desc }}</p>
      <div class="card-actions justify-center">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="badge badge-sm badge-outline badge-success"
        >
          {{ badge }}
        </div>
      </div>
    </div>
    <figure v-if="imgSrc" class="card-figure">
      <!-- Fallback image -->
      <div
        class="flex-1 md:w-96 h-32 md:h-52 bg-neutral-focus rounded-box"
        :class="hasLoaded ? 'hidden' : 'block'"
      ></div>
      <img
        :src="imgSrc"
        :alt="title"
        class="img"
        :class="hasLoaded ? 'block' : 'hidden'"
        @load="hasLoaded = true"
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
  data() {
    return {
      hasLoaded: false,
    };
  },
};
</script>

<style scoped>
.card {
  @apply max-w-sm md:max-w-md;
}

[data-theme="cupcake"] .card {
  @apply border border-base-content border-opacity-5 shadow-inner;
}

[data-theme="synthwave"] .card {
  @apply glass;
}

.card-figure {
  @apply px-[var(--padding-card,_2rem)] pb-[var(--padding-card,_2rem)];
}

.img {
  @apply rounded-box border border-base-content border-opacity-5 object-scale-down;
}
</style>
