<template>
  <div class="flex flex-col justify-between min-h-screen">
    <TheHeader />
    <main class="flex-1">
      <HeroGreets id="about" />
      <div class="carousel w-full">
        <div id="experience" class="carousel-item w-full">
          <HeroExp />
        </div>
        <div id="education" class="carousel-item w-full">
          <HeroEdu />
        </div>
      </div>
      <div class="flex justify-center gap-1">
        <a href="#experience" role="button" class="btn btn-xs btn-circle">1</a>
        <a href="#education" role="button" class="btn btn-xs btn-circle">2</a>
      </div>
      <HeroProjects id="projects" />
    </main>
    <TheFooter />
  </div>
</template>
