<template>
  <div class="flex flex-col justify-between min-h-screen">
    <TheHeader />
    <main class="flex-1">
      <HeroGreets />
      <HeroExp />
      <HeroProjects />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import HeroGreets from "~/components/hero-greets.vue";

export default { components: { HeroGreets } };
</script>
