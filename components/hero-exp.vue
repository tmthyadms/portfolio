<template>
  <AppHero title="Experience">
    <div data-aos="flip-down" class="stack">
      <CardExp v-for="(exp, index) in exps" :key="index" :exp="exp" />
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
          company:
            'Benefit Solutions<br class="inline" /><span class="hidden lg:inline">&nbsp;</span>Pte Ltd',
          companyUrl: "https://www.benefitsolutions.com.sg",
          duration: "Aug 2023 - Jan 2024",
          desc: "",
          skills: ["Nuxt.js", "Vue.js", "Playwright", "Gitlab"],
        },
      ],
    };
  },
};
</script>
