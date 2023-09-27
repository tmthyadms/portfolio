<template>
  <header
    class="navbar sticky top-0 z-30 justify-between bg-base-100 bg-opacity-90 backdrop-blur"
  >
    <div class="navbar-start">
      <!-- Mobile navigation -->
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-secondary m-1"><SvgList /></label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 bg-secondary text-secondary-content shadow rounded-box w-52"
        >
          <li v-for="(section, index) in sections" :key="index">
            <template v-if="section.title === 'Projects'">
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
      <a href="#" class="btn btn-ghost normal-case text-xl font-bold"
        >Timothy <span class="text-accent">Adams</span>
        <SvgPatchCheck fill="hsl(var(--in))" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <!-- Desktop navigation -->
      <template v-for="(section, index) in sections">
        <div
          v-if="section.title === 'Projects'"
          class="dropdown dropdown-hover"
        >
          <label tabindex="0" class="btn btn-ghost m-1 font-semibold">{{
            section.title
          }}</label>
          <ul
            tabindex="0"
            class="dropdown-content dropdown-theme menu p-2 shadow bg-base-100 rounded-box w-52"
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
          class="btn btn-sm btn-secondary btn-circle swap swap-rotate mr-4"
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
      light: "retro",
      dark: "coffee",
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
    setTheme(flag) {
      document.body.parentNode.dataset.theme = flag ? this.dark : this.light;
      document.getElementById("mode").dataset.tip = flag
        ? "Dark mode"
        : "Light mode";
    },
  },
};
</script>

<style scoped>
.hover-secondary {
  @apply hover:bg-secondary-focus hover:text-secondary-content;
}

[data-theme="retro"] .dropdown-theme {
  @apply bg-base-200;
}

[data-theme="coffee"] .dropdown-theme {
  @apply bg-[var(--dark-b-130)];
}
</style>
