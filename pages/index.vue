<template>
  <div class="flex flex-col justify-between min-h-screen">
    <TheHeader />
    <main class="flex-1">
      <!-- Top section -->
      <HeroGreets id="about" />
      <!-- Mid section -->
      <AppCarousel :items="midCarouselItems" :full-width="true" />
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
          id: "main-projects",
          component: "HeroMainProjects",
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
