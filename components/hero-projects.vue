<template>
  <AppHero title="Projects">
    <div
      class="grid grid-cols-[minmax(50vw,_387px)] grid-rows-[587.9px] auto-rows-[587.9px] lg:grid-cols-[repeat(2,_minmax(387px,_1fr))] lg:grid-flow-cols gap-6"
    >
      <AppFlipCard v-for="(project, index) in projects" :key="index">
        <template #front>
          <AppCard
            :title="project.title"
            :desc="project.desc"
            :imgSrc="project.imgSrc"
            :badge="project.badge"
            :badges="project.badges"
          />
        </template>
        <template #back>
          <p>
            Learn more:
            <span
              ><a :href="project.url" class="link link-accent">{{
                project.title
              }}</a></span
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
      projects: [
        {
          title: "Sentinel",
          desc: "An AI-powered virtual assessment proctoring.",
          imgSrc: "https://placehold.co/512",
          badge: "NEW",
          badges: ["PHP 8", "Bootstrap 5", "JavaScript", "MariaDB"],
          url: "https://github.com/tmthyadms/sentinel",
        },
        {
          title: "LockNRoll",
          desc: "A mobile app for controlling custom-built smart door lock remotely.",
          imgSrc: "https://placehold.co/512",
          badges: ["Flutter", "Firebase", "Arduino"],
          url: "https://github.com/tmthyadms/locknroll",
        },
      ],
    };
  },
};
</script>

<style scoped>
:deep(.flip-card-inner) {
  @apply shadow-xl;
}

:deep(.flip-card-back) {
  @apply grid place-content-center;
}
</style>
