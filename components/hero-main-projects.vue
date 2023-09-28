<template>
  <AppHero title="Main Projects" desc="Learn more by clicking on a project.">
    <div class="flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-12">
      <AppFlipCard
        v-for="(pastProject, index) in pastProjects"
        :key="index"
        :flipID="index"
        flipName="pro-projects"
      >
        <template #front>
          <AppCard
            :title="pastProject.title"
            :desc="pastProject.desc"
            :imgSrc="pastProject.imgSrc"
            :info="pastProject.info"
            :badge="pastProject.badge"
            :badges="pastProject.badges"
            class="h-full"
          />
        </template>
        <template #back>
          <p>
            Learn more:
            <span class="tooltip tooltip-bottom" :data-tip="pastProject.url"
              ><a
                :href="pastProject.url"
                target="_blank"
                class="link link-accent"
                >{{ pastProject.title }}</a
              ></span
            >
          </p>
        </template>
      </AppFlipCard>
    </div>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      pastProjects: [
        {
          title: "LockNRoll",
          desc: "A mobile app for controlling custom-built smart door lock remotely.",
          imgSrc: "projects/locknroll.png",
          info: "Developed for Bachelor's final year project",
          badges: ["Flutter", "Firebase", "Arduino"],
          url: "https://github.com/tmthyadms/locknroll",
        },
        {
          title: "EyeBuddy",
          desc: "A mobile app for detecting dry eye syndrome.",
          imgSrc: "projects/eyebuddy.png",
          info: "Developed for Apps Innovation Challenge (AIC) 2022",
          badges: ["Flutter", "Firebase", "Python"],
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
:deep(.desc-icon) {
  @apply rotate-180;
}

[data-theme="coffee"] .bi-hand-index-thumb {
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
