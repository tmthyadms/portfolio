<template>
  <header
    class="navbar sticky top-0 z-30 justify-between bg-base-100 bg-opacity-90 backdrop-blur"
  >
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-secondary m-1"><SvgList /></label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 bg-secondary shadow rounded-box w-52 font-semibold"
        >
          <li v-for="(section, index) in sections" :key="index">
            <a :href="section.href">{{ section.title }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="btn btn-ghost normal-case text-xl"
        >Timothy <span class="text-accent">Adams</span>
        <SvgPatchCheck fill="hsl(var(--in))" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <a
        v-for="(section, index) in sections"
        :key="index"
        :href="section.href"
        class="btn btn-ghost"
        >{{ section.title }}</a
      >
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
          href: "#projects",
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
