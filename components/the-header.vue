<template>
  <header
    id="header"
    class="navbar sticky top-0 z-30 px-4 justify-between bg-base-100 bg-opacity-90 backdrop-blur"
    @scroll="shadowOnScroll"
  >
    <div class="navbar-start">
      <!-- Mobile navigation -->
      <div class="dropdown lg:hidden mr-2">
        <label role="button" tabindex="0" class="btn btn-sm btn-ghost mb-1"
          ><IconList :width="20"
        /></label>
        <ul tabindex="0" class="dropdown-content menu menu-design p-2 w-52">
          <li v-for="(section, index) in sections" :key="index">
            <template v-if="section?.type">
              <a
                v-for="(subsection, index) in section.type"
                :key="index"
                :href="subsection.href"
                class="text-xs md:text-sm font-semibold uppercase"
                >{{ subsection.title }}</a
              >
            </template>
            <a
              v-else
              :href="section.href"
              class="text-xs md:text-sm font-semibold uppercase"
              >{{ section.title }}</a
            >
          </li>
        </ul>
      </div>
      <a
        role="button"
        href="#"
        class="flex items-center text-lg md:text-xl font-bold normal-case"
        >Timothy&nbsp;<span class="text-accent">Adams&nbsp;</span>
        <IconPatchCheck fill="hsl(var(--in))" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- Desktop navigation -->
      <template v-for="(section, index) in sections">
        <div v-if="section?.type" class="dropdown dropdown-hover group">
          <label role="button" tabindex="0" class="btn btn-ghost font-semibold"
            >{{ section.title }}
            <IconCaretDownFill />
          </label>
          <ul tabindex="0" class="dropdown-content menu menu-design p-2 w-52">
            <li v-for="(subsection, index) in section.type" :key="index">
              <a :href="subsection.href" class="font-semibold uppercase">{{
                subsection.title
              }}</a>
            </li>
          </ul>
        </div>
        <a
          v-else
          :key="index"
          role="button"
          :href="section.href"
          class="btn btn-ghost font-semibold"
          >{{ section.title }}</a
        >
      </template>
    </div>
    <div class="navbar-end">
      <div
        id="tip-theme"
        class="tooltip tooltip-left"
        :data-tip="theme.light.tip"
      >
        <label
          role="button"
          class="btn btn-sm btn-ghost btn-circle swap swap-rotate"
        >
          <input type="checkbox" v-model="theme.isDarkMode" />
          <div class="swap-off">
            <IconEmojiSunglasses :width="20" />
          </div>
          <div class="swap-on">
            <IconMoonStars :width="20" />
          </div>
        </label>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      sections: [
        {
          title: "About",
          href: "#about",
        },
        {
          title: "Experience",
          href: "#experience",
        },
        {
          title: "Education",
          href: "#education",
        },
        {
          title: "Projects",
          type: [
            {
              title: "Main Projects",
              href: "#main-projects",
            },
            {
              title: "Side Projects",
              href: "#side-projects",
            },
          ],
        },
      ],
      theme: {
        light: {
          current: "cupcake",
          tip: "Switch to dark mode",
        },
        dark: {
          current: "synthwave",
          tip: "Switch to light mode",
        },
        isDarkMode: false,
      },
    };
  },
  watch: {
    "theme.isDarkMode"(newFlag) {
      this.setTheme(newFlag);
    },
  },
  mounted() {
    const userPref = JSON.parse(localStorage.getItem("isDarkMode"));
    this.theme.isDarkMode = userPref ?? this.theme.isDarkMode;
    this.setTheme(this.theme.isDarkMode);
  },
  methods: {
    ...mapMutations("theme", ["setIsDarkMode"]),
    setTheme(isDarkMode) {
      document.body.parentNode.dataset.theme = isDarkMode
        ? this.theme.dark.current
        : this.theme.light.current;
      document.getElementById("tip-theme").dataset.tip = isDarkMode
        ? this.theme.dark.tip
        : this.theme.light.tip;
      localStorage.setItem("isDarkMode", isDarkMode);
      this.setIsDarkMode(isDarkMode);
    },
    shadowOnScroll(event) {
      console.log("event:", event);
      if (window.scrollY > 0)
        document.getElementById("header").classList.add("shadow");
      else document.querySelector("header").classList.remove("shadow");
    },
  },
};
</script>

<style scoped>
.menu-design {
  @apply bg-base-100 border border-base-content border-opacity-5 rounded-box shadow-inner;
}
</style>
