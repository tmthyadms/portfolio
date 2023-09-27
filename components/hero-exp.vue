<template>
  <AppHero title="Experience">
    <h2 class="font-semibold">
      Frontend Intern @
      <span
        class="tooltip tooltip-bottom"
        data-tip="https://benefitsolutions.com.sg"
      >
        <a
          href="https://benefitsolutions.com.sg"
          target="_blank"
          class="link link-accent"
          >Benefit Solutions Pte Ltd</a
        >
      </span>
    </h2>
    <p class="mb-2">
      <span class="align-middle opacity-60">Aug 2023 - Jan 2024&nbsp;</span>
      <span class="tooltip tooltip-right align-middle" data-tip="6 months">
        <SvgInfoCircle class="opacity-60" />
      </span>
    </p>
    <p class="mb-6 text-lg opacity-60">
      <span class="italic">Updating soon</span>
      <span class="loading loading-dots loading-sm align-bottom"></span>
    </p>
    <div class="flex justify-center gap-2">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="badge badge-lg badge-success font-semibold"
      >
        {{ skill }}
      </div>
    </div>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      skills: ["Nuxt.js", "Vue.js", "Gitlab"],
    };
  },
};
</script>
