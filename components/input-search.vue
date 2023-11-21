<template>
  <div class="relative hidden lg:flex max-w-xs">
    <IconSearch
      :width="14"
      class="absolute top-1/2 start-3 transform -translate-y-1/2"
    />
    <input
      type="search"
      id="search"
      placeholder="Search..."
      class="input input-sm input-bordered w-full !ps-8 !pe-[4.25rem]"
      @input="searchSections($event)"
    />
    <ul
      v-if="results.length > 0"
      class="menu absolute top-10 w-full bg-base-100 app-border rounded-box shadow-inner"
    >
      <li v-for="(result, index) in results" :key="index">
        <a role="button" :href="result.href">{{ result.title }}</a>
      </li>
    </ul>
    <div class="flex gap-1 absolute top-1/2 end-3" style="translate: 0 -50%">
      <kbd class="kbd kbd-xs">ctrl</kbd>
      <kbd class="kbd kbd-xs">k</kbd>
    </div>
  </div>
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
    };
  },
  mounted() {
    this.searchKeybind();
  },
  methods: {
    searchKeybind() {
      window.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.code === "KeyK") {
          event.preventDefault();
          document.getElementById("search").focus();
        }
      });
    },
    levenshteinDistance(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;

      const matrix = [];

      for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }

      for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }

      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          const cost = a[j - 1] === b[i - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1, // deletion
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j - 1] + cost // substitution
          );
        }
      }

      return matrix[b.length][a.length];
    },
    searchSections(event) {
      const input = event.target.value.toLowerCase();
      const similarityThreshold = 2; // Adjust this threshold based on your preference
      const maxResults = 3; // Adjust the maximum number of displayed results

      if (input.length > 0) {
        this.results = [];

        this.sections.forEach((section) => {
          if (section?.type) {
            section.type.forEach((type) => {
              const similarityScore = this.levenshteinDistance(
                type.title.toLowerCase(),
                input
              );

              const result = {
                title: type.title,
                href: type.href,
                similarityScore: similarityScore,
              };

              this.results.push(result);
              // if (similarityScore < similarityThreshold) {
              //   this.results.push(result);
              // }
            });
          } else {
            const similarityScore = this.levenshteinDistance(
              section.title.toLowerCase(),
              input
            );

            const result = {
              title: section.title,
              href: section.href,
              similarityScore: similarityScore,
            };

            this.results.push(result);
            // if (similarityScore < similarityThreshold) {
            //   this.results.push(result);
            // }
          }
        });

        // Sort the results based on similarity score
        this.results.sort((a, b) => a.similarityScore - b.similarityScore);

        // Limit the number of displayed results
        this.results = this.results.slice(0, maxResults);
      } else {
        this.results = [];
      }
    },
  },
};
</script>

<style scoped></style>
