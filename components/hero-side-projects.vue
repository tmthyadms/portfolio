<template>
  <AppHero title="Side Projects" desc="Learn more by clicking on a project.">
    <div class="flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-12">
      <AppFlipCard
        v-for="(sideProject, index) in sideProjects"
        :key="index"
        :flipID="index"
        flipName="side-projects"
      >
        <template #front>
          <AppCard
            :title="sideProject.title"
            :desc="sideProject.desc"
            :imgSrc="sideProject.imgSrc"
            :badge="sideProject.badge"
            :badges="sideProject.badges"
            class="h-full"
          />
        </template>
        <template #back>
          <p>
            Learn more:
            <span class="tooltip tooltip-bottom" :data-tip="sideProject.url"
              ><a
                :href="sideProject.url"
                target="_blank"
                class="link link-accent"
                >{{ sideProject.title }}</a
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
          imgSrc: "https://placehold.co/320x180",
          badge: "NEW",
          badges: ["Nuxt 2", "Vue 2", "Tailwind CSS", "daisyUI"],
          url: "https://github.com/tmthyadms/portfolio",
        },
        {
          title: "Sentinel",
          desc: "An AI-powered virtual assessment proctoring.",
          imgSrc: "projects/sentinel.png",
          badges: ["PHP 8", "Bootstrap 5", "JavaScript", "MariaDB"],
          url: "https://github.com/tmthyadms/sentinel",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("theme", ["getIsDark"]),
  },
  watch: {
    getIsDark(newVal) {
      this.setPortfolioImgSrc(newVal);
    },
  },
  mounted() {
    this.setPortfolioImgSrc(this.getIsDark);
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
:deep(.desc-icon) {
  @apply rotate-180;
}

:deep(.bi-hand-index-thumb) {
  @apply fill-[#ffde34];
}

:deep(.flip-card-inner) {
  @apply shadow-lg;
}

:deep(.flip-card-front) {
  @apply h-full;
}

:deep(.flip-card-back) {
  @apply grid place-content-center;
}
</style>
