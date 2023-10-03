<template>
  <AppHero title="Education">
    <div class="rounded-box shadow">
      <div class="card">
        <div class="card-body">
          <ul class="steps steps-vertical h-96">
            <li
              v-for="(edu, index) in edus"
              :key="index"
              class="step step-primary !text-start"
            >
              <div>
                <p>
                  <strong>{{ edu.program }}</strong>
                </p>
                <p class="mb-2 text-xs opacity-60">
                  {{ edu.school }}
                </p>
                <div class="tooltip tooltip-bottom" :data-tip="edu.resultType">
                  <div class="badge badge-sm badge-outline badge-success">
                    {{ edu.result }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AppHero>
</template>

<script>
export default {
  data() {
    return {
      edus: [
        {
          program: "Bachelor in Computer Science (Hons.)",
          school: "Management and Science University",
          resultType: "CGPA",
          result: "3.82",
        },
        {
          program: "Foundation in Computer Science",
          school: "Universiti Teknologi PETRONAS",
          resultType: "CGPA",
          result: "3.86",
        },
        {
          program: "Pure Science and Computer Science",
          school: "SMK Tansau",
          resultType: "SPM",
          result: "8A 1B",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  @apply max-w-sm md:max-w-md lg:max-w-lg !bg-base-100;
}

[data-theme="cupcake"] .card {
  @apply border border-base-content border-opacity-5 shadow-inner;
}

[data-theme="synthwave"] .card {
  @apply glass;
}
</style>
