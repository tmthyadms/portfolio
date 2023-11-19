<template>
  <AppHero title="Main Projects" desc="Learn more by clicking on a project.">
    <div class="projects">
      <AppFlipCard
        v-for="(mainProject, index) in mainProjects"
        :key="index"
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
            :title="mainProject.title"
            :desc="mainProject.desc"
            :imgSrc="mainProject.imgSrc"
            :info="mainProject.info"
            :badge="mainProject.badge"
            :badges="mainProject.badges"
            :theme="false"
            class="card-project"
          />
        </template>
        <template #back>
          <FlipCardBackProject :project="mainProject" />
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
          title: "Jobzone",
          desc: "A website to evaluate fraudulent job posting.",
          imgSrc: "https://placehold.co/1919x1080?text=Jobzone",
          info: "Developed for GDG George Town DevHack 2023",
          badges: [
            "Nuxt 2",
            "Tailwind CSS",
            "daisyUI",
            "Flask",
            "MongoDB",
            "Python",
            "XGBoost",
          ],
          url: "https://github.com/tmthyadms/jobzone",
        },
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
      return index === this.mainProjects.length - 1;
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
