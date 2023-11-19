<template>
  <div class="flex flex-col justify-between min-h-screen">
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
          id: "side-projects",
          component: "HeroSideProjects",
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
