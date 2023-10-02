<template>
  <AppHero title="Experience">
    <div class="stack">
      <div v-for="(exp, index) in exps" :key="index" class="rounded-box shadow">
        <CardExp :exp="exp" />
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
