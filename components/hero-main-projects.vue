<template>
  <AppHero title="Main Projects" desc="Learn more by clicking on a project.">
    <div class="flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-12">
      <AppFlipCard
        v-for="(mainProject, index) in mainProjects"
        :key="index"
        :flipID="index"
        flip-name="main-projects"
      >
        <template #front>
          <AppCard
            :title="mainProject.title"
            :desc="mainProject.desc"
            :imgSrc="mainProject.imgSrc"
            :info="mainProject.info"
            :badge="mainProject.badge"
            :badges="mainProject.badges"
            class="h-full"
          />
        </template>
        <template #back>
          <p>
            <span v-if="mainProject?.remarks">
              {{ mainProject.remarks }}
              <br /><br />
            </span>
            <span>Learn more:</span>
            <span class="tooltip tooltip-bottom" :data-tip="mainProject.url"
              ><a
                :href="mainProject.url"
                target="_blank"
                class="link link-accent"
                >{{ mainProject?.urlTitle ?? mainProject.title }}</a
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
      mainProjects: [
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
          badges: ["Flutter", "Firebase", "Python", "OpenCV"],
          url: "https://shorturl.at/yHJR5",
          remarks: "Check out EyeBuddy on my LinkedIn's project.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/projects.css";
</style>
