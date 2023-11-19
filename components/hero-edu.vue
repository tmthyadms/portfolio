<template>
  <AppHero title="Education">
    <AppCard class="app-border max-w-md lg:max-w-none shadow-inner">
      <!-- <StepsEdu :edus="edus" /> -->
      <TimelineEdu :edus="edus" class="text-start" />
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
          date: {
            start: { year: 2021 },
            end: { year: 2024 },
          },
          tip: "CGPA",
          result: "3.82/4.00",
          completed: false,
        },
        {
          program: "Foundation in Computer Science",
          school: "Universiti Teknologi PETRONAS",
          date: {
            start: { year: 2019 },
            end: { year: 2020 },
          },
          tip: "CGPA",
          result: "3.86/4.00",
          completed: true,
        },
        {
          program: "Pure Science & Computer Science",
          school: "SMK Tansau",
          date: {
            start: { year: 2014 },
            end: { year: 2018 },
          },
          tip: "SPM",
          result: "8A 1B",
          completed: true,
        },
      ],
    };
  },
};
</script>
