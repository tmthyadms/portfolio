<template>
  <div>
    <div class="carousel" :class="{ 'w-full': fullWidth }">
      <div
        v-for="(item, index) in items"
        :key="index"
        :id="item.id"
        class="carousel-item relative"
        :class="{ 'w-full': fullWidth }"
      >
        <!-- Desktop navigation -->
        <div
          class="absolute hidden lg:flex transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a
            v-if="index > 0"
            role="button"
            :href="`#${items[index - 1].id}`"
            class="btn btn-circle mr-auto"
            ><SvgCaretLeftFill
          /></a>
          <a
            v-if="index < items.length - 1"
            role="button"
            :href="`#${items[index + 1].id}`"
            class="btn btn-circle ml-auto"
            ><SvgCaretRightFill
          /></a>
        </div>
        <component :is="item.component" />
      </div>
    </div>
    <!-- Mobile navigation -->
    <div class="flex justify-center gap-1 lg:hidden">
      <a
        v-for="(item, index) in items"
        :key="index"
        role="button"
        :href="`#${item.id}`"
        class="btn btn-xs btn-circle"
        >{{ index + 1 }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
