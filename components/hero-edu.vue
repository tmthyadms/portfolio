<template>
  <AppHero title="Education">
    <AppCard data-aos="flip-down" class="app-border shadow-inner">
      <StepsEdu :edus="edus" />
    </AppCard>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      edus: [
        {
          program: "Bachelor's in Computer Science (Hons.)",
          school: "Management and Science University",
          tip: "CGPA",
          result: "3.82",
        },
        {
          program: "Foundation in Computer Science",
          school: "Universiti Teknologi PETRONAS",
          tip: "CGPA",
          result: "3.86",
        },
        {
          program: "Pure Science & Computer Science",
          school: "SMK Tansau",
          tip: "SPM",
          result: "8A 1B",
        },
      ],
    };
  },
};
</script>
