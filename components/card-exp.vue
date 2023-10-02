<template>
  <div class="card">
    <div class="card-body">
      <div class="icon hidden lg:block">
        <SvgBriefcase />
      </div>
      <h2 class="card-title flex-col lg:flex-row text-lg">
        <span class="card-text">
          <span class="icon inline-block lg:hidden align-middle">
            <SvgBriefcase />
          </span>
          <span class="align-middle">{{ exp.role }} @</span>
        </span>
        <span class="tooltip tooltip-bottom" :data-tip="exp.companyUrl">
          <a :href="exp.companyUrl" target="_blank" class="link link-accent">{{
            exp.company
          }}</a>
        </span>
      </h2>
      <p class="card-text opacity-60">
        <span class="align-middle">{{ exp.duration }}&nbsp;</span>
        <!-- TODO: calculate duration -->
        <span class="tooltip tooltip-right align-middle" data-tip="6 months">
          <SvgInfoCircle />
        </span>
      </p>
      <p class="card-text text-lg opacity-60">
        <span v-if="exp?.desc">{{ exp.desc }}</span>
        <template v-else>
          <span class="italic">Updating soon</span>
          <span class="loading loading-dots loading-sm align-bottom"></span>
        </template>
      </p>
      <div class="card-actions justify-center">
        <div
          v-for="(skill, index) in exp.skills"
          :key="index"
          class="badge badge-lg badge-success font-semibold"
        >
          {{ skill }}
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
  @apply glass max-w-sm md:max-w-md lg:max-w-md min-h-[13rem] shadow;
}

.icon {
  @apply p-2 self-start bg-base-200 border border-base-content border-opacity-5 rounded-full;
}

[data-theme="coffee"] .card-text {
  @apply text-neutral-content;
}
</style>
