<template>
  <div class="card" :class="{ 'card-theme': theme }">
    <div class="card-body">
      <slot>
        <h2 class="card-title">
          {{ title }}
          <div v-if="badge" class="badge badge-primary">
            {{ badge }}
          </div>
          <div v-if="info" class="hidden lg:block ml-auto">
            <span
              class="tooltip tooltip-secondary tooltip-left font-normal"
              :data-tip="info"
            >
              <div
                class="p-0.5 rounded-box outline outline-1 outline-base-content/[0.2]"
              >
                <IconInfoLg />
              </div>
            </span>
          </div>
        </h2>
        <p
          v-if="info"
          class="lg:hidden flex items-center gap-1 text-xs text-start opacity-60"
        >
          <IconAsterisk :width="8" class="fill-secondary" /><span>{{
            info
          }}</span>
        </p>
        <p class="text-sm text-start opacity-60">{{ desc }}</p>
        <div class="card-actions justify-center">
          <div
            v-for="(badge, index) in badges"
            :key="index"
            class="badge badge-sm badge-outline badge-info"
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
        class="img app-border"
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
  @apply bg-base-300 rounded-box object-scale-down;
}
</style>
