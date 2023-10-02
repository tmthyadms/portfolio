<template>
  <div class="card group">
    <div class="card-body justify-end overflow-hidden">
      <h2 class="m-auto font-black text-4xl text-base-content/[0.25]">
        Benefit Solutions<br class="inline lg:hidden" /><span
          class="hidden lg:inline"
          >&nbsp;</span
        >Pte Ltd
      </h2>
      <div
        class="space-y-2 translate-y-full group-hover:translate-y-0 transition duration-500 ease-out"
      >
        <h3
          class="card-title -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        >
          {{ exp.role }}
          <SvgArrowRight
            class="group-hover:animate-none group-hover:translate-x-1 group-hover:opacity-0 transition duration-300"
          />
        </h3>
        <div
          class="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:ease-in"
        >
          <p class="text-xs text-start opacity-60">
            <span v-if="exp?.desc">{{ exp.desc }}</span>
            <template v-else>
              <span>Updating soon</span>
              <span class="loading loading-dots loading-xs align-bottom"></span>
            </template>
          </p>

          <div class="card-actions justify-center">
            <div
              v-for="(skill, index) in exp.skills"
              :key="index"
              class="badge badge-sm badge-outline badge-success"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exp: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  @apply max-w-sm md:max-w-md lg:max-w-lg min-h-[24rem] !bg-base-100;
}

[data-theme="cupcake"] .card {
  @apply border border-base-content border-opacity-5 shadow-inner;
}

[data-theme="synthwave"] .card {
  @apply glass;
}
</style>
