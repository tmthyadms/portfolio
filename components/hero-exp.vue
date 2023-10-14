<template>
  <AppHero title="Experience">
    <div class="stack">
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
