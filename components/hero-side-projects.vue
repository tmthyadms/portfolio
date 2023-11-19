<template>
  <AppHero title="Side Projects" desc="Learn more by clicking on a project.">
    <div class="projects app-gap">
      <AppFlipCard
        v-for="(sideProject, index) in sideProjects"
        :key="index"
        :data-aos="aos(index)"
        data-aos-offset="150"
        :flip-id="index"
        flip-name="side-projects"
        :class="{
          'lg:col-span-2 lg:place-self-center': isLast(index) && isEven(index),
        }"
      >
        <template #front>
          <AppCard
            :title="sideProject.title"
            :desc="sideProject.desc"
            :imgSrc="sideProject.imgSrc"
            :badge="sideProject.badge"
            :badges="sideProject.badges"
            :theme="false"
            class="card-project"
          />
        </template>
        <template #back>
          <FlipCardBackProject :project="sideProject" />
        </template>
      </AppFlipCard>
    </div>
  </AppHero>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      sideProjects: [
        {
          title: "Portfolio",
          desc: "My digital portfolio.",
          imgSrc: "projects/portfolio-light.png",
          badges: ["Nuxt 2", "Tailwind CSS", "daisyUI"],
          url: "https://github.com/tmthyadms/portfolio",
        },
        {
          title: "Sentinel",
          desc: "An AI-powered virtual assessment proctoring.",
          imgSrc: "projects/sentinel.png",
          badges: ["PHP 8", "Bootstrap 5", "face-api.js", "MariaDB"],
          url: "https://github.com/tmthyadms/sentinel",
        },
      ],
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
      const portfolioIndex = this.sideProjects.findIndex(
        (project) => project.title === "Portfolio"
      );
      this.sideProjects[portfolioIndex].imgSrc = flag
        ? "projects/portfolio-light.png"
        : "projects/portfolio-dark.png";
    },
    isEven(index) {
      return index % 2 === 0;
    },
    isLast(index) {
      return index === this.sideProjects.length - 1;
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
