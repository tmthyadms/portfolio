<template>
  <AppHero
    title="Featured projects"
    desc="Learn more by clicking on a project."
  >
    <div class="projects app-gap">
      <AppFlipCard
        v-for="(featProject, index) in featProjects"
        :key="index"
        role="button"
        :data-aos="aos(index)"
        data-aos-offset="150"
        :flip-id="index"
        flip-name="main-projects"
        :class="{
          'lg:col-span-2 lg:place-self-center': isLast(index) && isEven(index),
        }"
      >
        <template #front>
          <AppCard
            :title="featProject.title"
            :desc="featProject.desc"
            :imgSrc="featProject.imgSrc"
            :info="featProject.info"
            :badge="featProject.badge"
            :badges="featProject.badges"
            :theme="false"
            class="card-project"
          />
        </template>
        <template #back>
          <FlipCardBackProject :project="featProject" />
        </template>
      </AppFlipCard>
    </div>
  </AppHero>
</template>

<script>
import featProjects from "@/assets/data/featured-projects.json";

export default {
  data() {
    return {
      featProjects,
      anims: {
        even: "fade-right",
        odd: "fade-left",
        last: "fade-down",
      },
    };
  },
  mounted() {
    const mediaQuery = window.matchMedia("not all and (min-width: 1024px)");
    this.aosOnMobile(mediaQuery);
    mediaQuery.addEventListener("change", this.aosOnMobile);
  },
  methods: {
    isEven(index) {
      return index % 2 === 0;
    },
    isLast(index) {
      return index === this.featProjects.length - 1;
    },
    aos(index) {
      const isEven = this.isEven(index);
      const isLast = this.isLast(index);
      if (isEven) return isLast ? this.anims.last : this.anims.even;
      else return this.anims.odd;
    },
    aosOnMobile(mediaQuery) {
      if (mediaQuery.matches) {
        this.anims.even = "fade-down";
        this.anims.odd = "fade-down";
      } else {
        this.anims.even = "fade-right";
        this.anims.odd = "fade-left";
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/projects.css";
</style>
