<template>
  <div class="card max-w-sm md:max-w-md" :class="{ 'card-theme': theme }">
    <div class="card-body">
      <slot>
        <h2 class="card-title">
          {{ title }}
          <div v-if="badge" class="badge badge-primary">
            {{ badge }}
          </div>
          <div v-if="info" class="hidden lg:block ml-auto">
            <span
              class="tooltip tooltip-info tooltip-left font-normal"
              :data-tip="info"
            >
              <IconInfoCircleFill />
            </span>
          </div>
        </h2>
        <p v-if="info" class="lg:hidden text-xs text-start opacity-60">
          <em>* {{ info }}</em>
        </p>
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
      </slot>
    </div>
    <figure v-if="imgSrc" class="card-figure">
      <!-- Fallback image -->
      <div
        class="flex-1 bg-neutral-focus rounded-box"
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
    },
    desc: {
      type: String,
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
    },
    theme: {
      type: Boolean,
      default: true,
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
[data-theme="cupcake"] .card-theme {
  @apply bg-base-200 text-base-content;
}

[data-theme="synthwave"] .card-theme {
  @apply bg-neutral text-neutral-content;
}

.card-figure {
  @apply px-[var(--padding-card,_2rem)] pb-[var(--padding-card,_2rem)];
}

.img {
  @apply bg-base-300 border border-base-content border-opacity-5 rounded-box object-scale-down;
}
</style>
