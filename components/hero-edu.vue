<template>
  <AppHero title="Education journey">
    <AppCard class="app-border max-w-md lg:max-w-none shadow-inner">
      <!-- <StepsEdu :edus="edus" /> -->
      <TimelineEdu :edus="edus" class="text-start" />
    </AppCard>
  </AppHero>
</template>

<script>
import edus from "@/assets/data/education.json";

export default {
  data() {
    return {
      edus,
    };
  },
};
</script>
