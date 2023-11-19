<template>
  <AppHero
    desc="A final year Computer Science student with expertize in web development using <em>Vue.js</em>, <em>Tailwind CSS</em>, and <em>Bootstrap</em> as well as mobile development using <em>Flutter</em>."
    :center="false"
  >
    <template #figure>
      <AppAvatar />
    </template>
    <template #title>
      <h1
        id="introduce"
        class="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
      ></h1>
    </template>
    <template>
      <div class="flex justify-center lg:justify-normal mb-6">
        <div
          v-for="social in socials"
          class="tooltip tooltip-primary"
          :data-tip="social.tip"
        >
          <a
            role="button"
            :href="social.url"
            target="_blank"
            class="btn btn-ghost btn-square"
          >
            <component :is="social.component" :width="32" />
          </a>
        </div>
      </div>
      <a
        role="button"
        href="resume.pdf"
        type="application/pdf"
        target="_blank"
        class="btn btn-sm md:btn-md btn-primary btn-wide group mb-2 lg:mr-2"
      >
        View Resume
        <IconBoxArrowUpRight
          class="group-hover:translate-x-1 transition-transform duration-300 group-hover:ease-out"
        />
      </a>
      <span class="block lg:inline text-xs md:text-base"
        >or download it
        <span
          class="tooltip tooltip-primary tooltip-bottom"
          data-tip="timothy-resume.pdf"
        >
          <a
            href="resume.pdf"
            type="application/pdf"
            class="link link-accent link-hover"
            download="timothy-resume.pdf"
            >here</a
          ></span
        >
      </span>
    </template>
  </AppHero>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
  data() {
    return {
      socials: [
        {
          url: "https://linkedin.com/in/tmthyadms",
          tip: "LinkedIn",
          component: "IconLinkedin",
        },
        {
          url: "https://github.com/tmthyadms",
          tip: "GitHub",
          component: "IconGithub",
        },
      ],
    };
  },
  mounted() {
    let typewriter = new Typewriter("#introduce", {
      loop: true,
    });
    typewriter
      .pauseFor(700)
      .typeString("Hi, I'm Timothy!")
      .pauseFor(300)
      .deleteChars(5)
      .typeString("!")
      .pauseFor(1500)
      .start();
  },
};
</script>

<style scoped>
[data-theme="cupcake"] .bi-linkedin {
  @apply fill-[#0072b1];
}

[data-theme="cupcake"] .bi-github {
  @apply fill-[#171515];
}
</style>
