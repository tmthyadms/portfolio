<template>
  <div>
    <div class="carousel" :class="{ 'w-full': fullWidth }">
      <div
        v-for="(item, index) in items"
        :key="index"
        :id="item.id"
        class="carousel-item"
        :class="{ 'w-full': fullWidth }"
      >
        <component :is="item.component" />
      </div>
    </div>
    <div class="flex justify-center gap-1">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="`#${item.id}`"
        role="button"
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
