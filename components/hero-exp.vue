<template>
  <AppHero title="Experience">
    <div class="stack">
      <template v-for="(exp, index) in exps">
        <CardExp :key="index" :exp="exp" />
      </template>
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
