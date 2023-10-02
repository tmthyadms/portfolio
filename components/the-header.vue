<template>
  <header
    class="navbar sticky top-0 z-30 justify-between bg-base-100 bg-opacity-90 backdrop-blur"
  >
    <div class="navbar-start">
      <!-- Mobile navigation -->
      <div class="dropdown lg:hidden">
        <label role="button" tabindex="0" class="btn m-1"><SvgList /></label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 bg-base-200 shadow rounded-box w-52"
        >
          <li v-for="(section, index) in sections" :key="index">
            <template v-if="section?.type">
              <a
                v-for="(project, index) in section.type"
                :key="index"
                :href="project.href"
                class="font-semibold uppercase hover-secondary"
                >{{ project.title }}</a
              >
            </template>
            <a
              v-else
              :href="section.href"
              class="font-semibold uppercase hover-secondary"
              >{{ section.title }}</a
            >
          </li>
        </ul>
      </div>
      <a
        role="button"
        href="#"
        class="btn btn-ghost normal-case text-xl font-bold"
        target="_blank"
        >Timothy <span class="text-accent">Adams</span>
        <SvgPatchCheck fill="hsl(var(--in))" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- Desktop navigation -->
      <template v-for="(section, index) in sections">
        <div v-if="section?.type" class="dropdown dropdown-hover group">
          <label role="button" tabindex="0" class="btn btn-ghost font-semibold"
            >{{ section.title }}
            <SvgCaretDownFill
              class="transition-transform group-hover:rotate-180"
            />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu mt-1 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li v-for="(project, index) in section.type" :key="index">
              <a :href="project.href" class="font-semibold uppercase">{{
                project.title
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
      <div id="mode" class="tooltip tooltip-left" data-tip="">
        <label
          role="button"
          class="btn btn-sm btn-circle swap swap-rotate mr-4"
        >
          <input type="checkbox" v-model="swap" />
          <div class="swap-off">
            <SvgEmojiSunglasses />
          </div>
          <div class="swap-on">
            <SvgMoonStars />
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
      swap: false,
      light: "cupcake",
      dark: "synthwave",
    };
  },
  watch: {
    swap(newVal) {
      this.setTheme(newVal);
      localStorage.setItem("isDark", newVal);
    },
  },
  mounted() {
    const isDark = JSON.parse(localStorage.getItem("isDark"));
    this.setTheme(isDark);
    this.swap = isDark;
  },
  methods: {
    ...mapMutations("theme", ["setIsDark"]),
    setTheme(flag) {
      document.body.parentNode.dataset.theme = flag ? this.dark : this.light;
      document.getElementById("mode").dataset.tip = flag
        ? "Dark mode"
        : "Light mode";
      this.setIsDark(flag);
    },
  },
};
</script>

<style scoped>
.hover-secondary {
  @apply hover:bg-secondary-focus hover:text-secondary-content;
}
</style>
