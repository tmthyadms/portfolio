<template>
  <div class="relative hidden lg:flex max-w-xs">
    <IconSearch :width="14" class="input-content start-3" />
    <input
      id="search"
      type="search"
      placeholder="Quick search..."
      class="input input-sm input-bordered w-full !ps-8 !pe-[4.25rem]"
      @input="quickSearch"
    />
    <template v-if="results.length > 0">
      <SearchMenu :results="results" class="absolute top-10 w-full" />
    </template>
    <div class="flex gap-1 input-content end-3">
      <kbd class="kbd kbd-xs">ctrl</kbd>
      <kbd class="kbd kbd-xs">k</kbd>
    </div>
  </div>
</template>

<script>
// import { distance } from "fastest-levenshtein";
import distance from "jaro-winkler";

export default {
  data() {
    return {
      sections: [
        {
          title: "About",
          href: "#about",
        },
        {
          title: "Work experience",
          href: "#experience",
        },
        {
          title: "Education journey",
          href: "#education",
        },
        {
          title: "Projects",
          type: [
            {
              title: "Featured projects",
              href: "#feat-projects",
            },
            {
              title: "Side projects",
              href: "#side-projects",
            },
          ],
        },
      ],
      results: [],
      searchMenu: null,
    };
  },
  mounted() {
    this.searchKeybind();
  },
  methods: {
    searchKeybind() {
      window.addEventListener("keydown", (event) => {
        const search = document.getElementById("search");
        if (event.ctrlKey && event.code === "KeyK") {
          event.preventDefault();
          search.focus();
        } else if (event.code === "Escape") {
          this.results = [];
          search.blur();
        }
      });
    },
    updateResults(section, input) {
      const isIncluded = this.results.some(
        (result) => result.title === section.title
      );
      if (isIncluded) return;
      const sectionTitle = section.title;
      const lowerSectionTitle = sectionTitle.toLowerCase();
      const lowerInput = input.toLowerCase();
      if (lowerSectionTitle.includes(lowerInput)) {
        const result = {
          ...section,
          ...{
            distance: distance(sectionTitle, input),
          },
        };
        this.results.push(result);
      }
    },
    sortResults() {
      this.results.sort((a, b) => b.distance - a.distance);
    },
    quickSearch(event) {
      if (this.results.length > 0) this.sortResults();
      const input = event.target.value;
      if (input.length > 0) {
        this.sections.forEach((section) => {
          // subsections
          if (section?.type) {
            section.type.forEach((type) => {
              this.updateResults(type, input);
            });
          } else {
            this.updateResults(section, input);
          }
        });
      } else {
        this.results = [];
      }
    },
  },
};
</script>

<style scoped>
.input-content {
  @apply absolute top-1/2;
  translate: 0 -50%;
}
</style>
