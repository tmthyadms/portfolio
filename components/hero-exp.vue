<template>
  <AppHero title="Work experience">
    <div data-aos="flip-down" class="stack">
      <CardExp
        v-for="(exp, index) in exps"
        :key="index"
        :exp="exp"
        class="max-w-md"
      />
    </div>
  </AppHero>
</template>

<script>
import exps from "@/assets/data/experiences.json";

export default {
  data() {
    return {
      exps,
    };
  },
};
</script>
