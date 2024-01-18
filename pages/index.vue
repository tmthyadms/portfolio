<template>
  <div class="flex min-h-screen flex-col justify-between">
    <TheHeader />
    <main class="flex-1">
      <!-- Top section -->
      <HeroAbout id="about" />
      <!-- Mid section -->
      <AppCarousel
        :items="midCarouselItems"
        :full-width="true"
        class="spacer spacer-art"
      />
      <!-- Bot section -->
      <AppCarousel :items="botCarouselItems" :full-width="true" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      midCarouselItems: [
        {
          id: "experience",
          component: "HeroExp",
        },
        {
          id: "education",
          component: "HeroEdu",
        },
      ],
      botCarouselItems: [
        {
          id: "feat-projects",
          component: "HeroFeatProjects",
        },
        {
          id: "other-projects",
          component: "HeroOtherProjects",
        },
      ],
    };
  },
};
</script>

<style scoped>
[data-theme="cupcake"] .spacer-art {
  @apply bg-[url('@/assets/svg/mid-blob.svg')];
}

[data-theme="synthwave"] .spacer-art {
  @apply bg-[url('@/assets/svg/mid-polygon-scatter.svg')];
}
</style>
