<template>
  <AppHero title="Other projects" desc="Learn more by clicking on a project.">
    <div class="projects app-gap">
      <AppFlipCard
        v-for="(otherProject, index) in otherProjects"
        :key="index"
        role="button"
        :data-aos="aos(index)"
        data-aos-offset="150"
        :flip-id="index"
        flip-name="other-projects"
        :class="{
          'lg:col-span-2 lg:place-self-center': isLast(index) && isEven(index),
        }"
      >
        <template #front>
          <AppCard
            :title="otherProject.title"
            :desc="otherProject.desc"
            :imgSrc="otherProject.imgSrc"
            :badge="otherProject.badge"
            :badges="otherProject.badges"
            :theme="false"
            class="card-project"
          />
        </template>
        <template #back>
          <FlipCardBackProject :project="otherProject" />
        </template>
      </AppFlipCard>
    </div>
  </AppHero>
</template>

<script>
import otherProjects from "@/assets/data/other-projects.json";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      otherProjects,
      anims: {
        even: "fade-right",
        odd: "fade-left",
        last: "fade-down",
      },
    };
  },
  computed: {
    ...mapGetters("theme", ["getIsDarkMode"]),
  },
  watch: {
    getIsDarkMode(newVal) {
      this.setPortfolioImgSrc(newVal);
    },
  },
  mounted() {
    this.setPortfolioImgSrc(this.getIsDarkMode);
    const mediaQuery = window.matchMedia("not all and (min-width: 1024px)");
    this.aosOnMobile(mediaQuery);
    mediaQuery.addEventListener("change", this.aosOnMobile);
  },
  methods: {
    setPortfolioImgSrc(flag) {
      const portfolioIndex = this.otherProjects.findIndex(
        (project) => project.title === "Portfolio",
      );
      this.otherProjects[portfolioIndex].imgSrc = flag
        ? "projects/portfolio-light.png"
        : "projects/portfolio-dark.png";
    },
    isEven(index) {
      return index % 2 === 0;
    },
    isLast(index) {
      return index === this.otherProjects.length - 1;
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
