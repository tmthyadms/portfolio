<template>
  <AppHero title="Experience">
    <p class="mb-2">
      <span class="align-middle"><em>Aug 2023 - Jan 2024</em>&nbsp;</span>
      <span class="tooltip tooltip-right align-middle" data-tip="6 months">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
      </span>
    </p>
    <p class="mb-2 font-semibold">
      Frontend Intern @
      <span
        class="tooltip tooltip-bottom"
        data-tip="https://benefitsolutions.com.sg"
      >
        <a
          href="https://benefitsolutions.com.sg"
          target="_blank"
          class="link link-info"
          >Benefit Solutions Pte Ltd</a
        >
      </span>
    </p>
    <p class="mb-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quia porro,
      voluptates ab consequuntur eligendi incidunt dolorem corporis, animi
      maiores ut beatae reprehenderit? Ratione, fuga. Voluptates, alias. Cum,
      voluptate accusantium.
    </p>
    <div class="flex justify-center gap-2">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="badge badge-primary-theme"
      >
        {{ skill }}
      </div>
    </div>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      skills: ["Nuxt.js", "Vue.js", "Gitlab"],
    };
  },
};
</script>

<style scoped></style>
