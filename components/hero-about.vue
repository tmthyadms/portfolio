<template>
  <AppHero
    desc="A final year Computer Science student with expertize in web development using <em>Vue.js</em>, <em>Tailwind CSS</em>, and <em>Bootstrap</em> as well as experienced in mobile development using <em>Flutter</em>."
    :center="false"
  >
    <template #figure>
      <AppAvatar />
    </template>
    <template #title>
      <h1
        id="introduce"
        class="mb-4 text-3xl font-thin md:text-4xl lg:text-5xl"
      >
        <div
          class="skeleton mx-auto h-9 w-60 md:h-10 md:w-72 lg:mx-[initial] lg:h-12 lg:w-96"
        ></div>
      </h1>
    </template>
    <template>
      <div class="mb-6 flex justify-center lg:justify-normal">
        <div
          v-for="social in socials"
          class="tooltip tooltip-secondary"
          :data-tip="social.tip"
        >
          <a
            role="button"
            :href="social.url"
            target="_blank"
            class="btn btn-square btn-ghost"
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
        class="group btn btn-primary btn-sm btn-wide mb-2 md:btn-md lg:mr-2"
      >
        View Resume
        <IconBoxArrowUpRight
          class="transition-transform duration-300 group-hover:translate-x-1 group-hover:ease-out"
        />
      </a>
      <span class="block text-xs md:text-base lg:inline"
        >or download it
        <span
          class="tooltip tooltip-bottom tooltip-secondary"
          data-tip="timothy-resume.pdf"
        >
          <a
            href="resume.pdf"
            type="application/pdf"
            class="link-hover link-accent link"
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
          url: "https://www.linkedin.com/in/tmthyadms",
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
      .pauseFor(750)
      .typeString("Hello, I'm Timothy!")
      .pauseFor(750)
      .deleteChars(5)
      .typeString("!")
      .pauseFor(1000)
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
