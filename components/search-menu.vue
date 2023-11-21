<template>
  <ul class="menu app-menu app-border">
    <template v-for="(result, index) in newResults">
      <li :key="index" :id="`search-item-${index}`">
        <a role="button" :href="result.href" class="menu-fix">{{
          result.title
        }}</a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
    maxResults: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
  watch: {
    results: {
      handler() {
        this.$nextTick(() => {
          const firstSearchItem =
            document.getElementById("search-item-0").firstChild;
          firstSearchItem.classList.add("menu-focus");
          window.addEventListener(
            "keydown",
            (event) => {
              if (event.code === "Enter") firstSearchItem.click();
            },
            { once: true }
          );
        });
      },
      immediate: true,
    },
  },
  mounted() {
    this.arrowNavigation();
  },
  computed: {
    newResults() {
      return this.results.slice(0, this.maxResults);
    },
  },
  methods: {
    arrowNavigation() {
      window.addEventListener("keydown", (event) => {
        if (document.getElementById("search-item-0")) {
          const firstSearchItem =
            document.getElementById("search-item-0").firstChild;
          if (firstSearchItem.classList.contains("menu-focus"))
            firstSearchItem.classList.remove("menu-focus");
        }
        if (event.code === "ArrowDown") {
          event.preventDefault();
          this.selected = (this.selected + 1) % this.newResults.length;
          document
            .getElementById(`search-item-${this.selected}`)
            .firstChild.focus();
        } else if (event.code === "ArrowUp") {
          event.preventDefault();
          this.selected =
            (this.selected - 1 + this.maxResults) % this.newResults.length;
          document
            .getElementById(`search-item-${this.selected}`)
            .firstChild.focus();
        }
      });
    },
  },
};
</script>

<style scoped>
.menu-focus {
  @apply bg-base-content/[0.1];
}
</style>
