<template>
  <AppHero title="Experience">
    <p class="mb-2">
      <span class="align-middle"><em>Aug 2023 - Jan 2024</em>&nbsp;</span>
      <span class="tooltip tooltip-right align-middle" data-tip="6 months">
        <SvgInfoCircle />
      </span>
    </p>
    <p class="mb-2 font-semibold">
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
    </p>
    <p class="mb-6">Updating soon.</p>
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

<style scoped></style>
