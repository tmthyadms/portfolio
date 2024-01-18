<template>
  <div class="relative hidden max-w-xs lg:flex">
    <IconSearch :width="14" class="input-content start-3" />
    <input
      id="search"
      type="search"
      placeholder="Search"
      class="input input-bordered input-sm w-full !pe-[4.25rem] !ps-8"
      @input="quickSearch"
    />
    <template v-if="results.length > 0">
      <SearchMenu :results="results" class="absolute top-10 w-full" />
    </template>
    <div class="input-content end-3 flex gap-1">
      <kbd class="kbd kbd-xs">ctrl</kbd>
      <kbd class="kbd kbd-xs">k</kbd>
    </div>
  </div>
</template>

<script>
import sections from "@/assets/data/page-sections.json";
import { distance } from "fastest-levenshtein";
// import distance from "jaro-winkler";

export default {
  data() {
    return {
      sections,
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
      // WARNING: this causes the results not to be updated
      // const isIncluded = this.results.some(
      //   (result) => result.title === section.title
      // );
      // if (isIncluded) return;
      const sectionTitle = section.title;
      const sectionAltTitle = section?.altTitle;
      const lowerSectionTitle = sectionTitle.toLowerCase();
      const lowerInput = input.toLowerCase();
      if (
        lowerSectionTitle.includes(lowerInput) ||
        (sectionAltTitle && sectionAltTitle.toLowerCase().includes(lowerInput))
      ) {
        const result = {
          ...section,
          ...{
            distance: distance(sectionAltTitle ?? sectionTitle, input),
          },
        };
        this.results.push(result);
        this.sortResults();
      }
    },
    sortResults() {
      // levenstein distance sorting: a - b (ascending)
      // jaro-winkler distance sorting: b - a (descending)
      this.results.sort((a, b) => a.distance - b.distance);
    },
    quickSearch(event) {
      this.results = []; // reset results to get new results
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
