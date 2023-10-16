<template>
  <AppHero title="Side Projects" desc="Learn more by clicking on a project.">
    <div class="app-flex">
      <AppFlipCard
        v-for="(sideProject, index) in sideProjects"
        :key="index"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :flipID="index"
        flip-name="side-projects"
      >
        <template #front>
          <AppCard
            :title="sideProject.title"
            :desc="sideProject.desc"
            :imgSrc="sideProject.imgSrc"
            :badge="sideProject.badge"
            :badges="sideProject.badges"
            :theme="false"
            class="h-full"
          />
        </template>
        <template #back>
          <p>
            <span v-if="sideProject?.remarks">
              {{ sideProject.remarks }}
              <br /><br />
            </span>
            <span>Learn more:</span>
            <span class="tooltip tooltip-bottom" :data-tip="sideProject.url"
              ><a
                :href="sideProject.url"
                target="_blank"
                class="link link-accent link-hover"
                >{{ sideProject?.urlTitle ?? sideProject.title }}</a
              ></span
            >
          </p>
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
          badge: "NEW",
          badges: ["Nuxt 2", "Vue 2", "Tailwind CSS", "daisyUI"],
          url: "https://github.com/tmthyadms/portfolio",
        },
        {
          title: "Sentinel",
          desc: "An AI-powered virtual assessment proctoring.",
          imgSrc: "projects/sentinel.png",
          badges: [
            "PHP 8",
            "Bootstrap 5",
            "JavaScript",
            "face-api.js",
            "MariaDB",
          ],
          url: "https://github.com/tmthyadms/sentinel",
        },
      ],
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
  },
  methods: {
    setPortfolioImgSrc(flag) {
      this.sideProjects[0].imgSrc = flag
        ? "projects/portfolio-light.png"
        : "projects/portfolio-dark.png";
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/projects.css";
</style>
