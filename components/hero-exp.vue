<template>
  <AppHero title="Experience">
    <div v-for="(exp, index) in exps" :key="index">
      <h2 class="font-semibold">
        {{ exp.role }} @
        <span class="tooltip tooltip-bottom" :data-tip="exp.companyUrl">
          <a :href="exp.companyUrl" target="_blank" class="link link-accent">{{
            exp.company
          }}</a>
        </span>
      </h2>
      <p class="mb-2">
        <span class="align-middle opacity-60">{{ exp.duration }}&nbsp;</span>
        <!-- TODO: calculate duration -->
        <span class="tooltip tooltip-right align-middle" data-tip="6 months">
          <SvgInfoCircle class="opacity-60" />
        </span>
      </p>
      <p class="mb-6 text-lg opacity-60">
        <span v-if="exp?.desc">{{ exp.desc }}</span>
        <template v-else>
          <span class="italic">Updating soon</span>
          <span class="loading loading-dots loading-sm align-bottom"></span>
        </template>
      </p>
      <div class="flex justify-center gap-2">
        <div
          v-for="(skill, index) in exp.skills"
          :key="index"
          class="badge badge-lg badge-success font-semibold"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      exps: [
        {
          role: "Frontend Intern",
          company: "Benefit Solutions Pte Ltd",
          companyUrl: "https://www.benefitsolutions.com.sg",
          duration: "Aug 2023 - Jan 2024",
          desc: "",
          skills: ["Nuxt.js", "Vue.js", "Gitlab"],
        },
      ],
    };
  },
};
</script>
