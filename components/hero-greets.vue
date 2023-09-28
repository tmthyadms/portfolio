<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col-reverse gap-6 lg:flex-row">
      <div class="max-w-lg text-center lg:text-left">
        <h1 id="introduce" class="text-5xl font-bold pb-6"></h1>
        <p class="mb-6 text-lg opacity-60">
          A final year Computer Science student pursuing a Bachelor's degree.
          Passionate about programming competitions, software development, and
          open-source projects.
        </p>
        <div class="flex justify-center lg:justify-normal gap-4 mb-6">
          <div class="tooltip" data-tip="LinkedIn: @tmthyadms">
            <a href="https://linkedin.com/in/tmthyadms" target="_blank">
              <SvgLinkedin :width="32" fill="#0072b1" />
            </a>
          </div>
          <div class="tooltip" data-tip="GitHub: @tmthyadms">
            <a href="https://github.com/tmthyadms" target="_blank">
              <SvgGithub :width="32" fill="#171515" />
            </a>
          </div>
        </div>
        <a
          href="resume.pdf"
          type="application/pdf"
          target="_blank"
          class="btn btn-primary btn-wide mb-2 lg:mr-2 rounded-full"
        >
          View Resume
        </a>
        <span class="block lg:inline"
          >or download it
          <span class="tooltip tooltip-bottom" data-tip="timothy-resume.pdf">
            <a
              href="resume.pdf"
              type="application/pdf"
              class="link link-accent"
              download="timothy-resume.pdf"
              >here</a
            ></span
          >
        </span>
      </div>
      <div class="avatar">
        <div
          class="w-64 rounded-full outline outline-4 outline-primary outline-offset-4"
        >
          <img
            src="profile-pic.jpg"
            alt="Profile picture"
            class="transition-transform duration-500 hover:scale-150"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
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
[data-theme="coffee"] .bi {
  @apply fill-current;
}
</style>
