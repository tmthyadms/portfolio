<template>
  <AppHero title="Education">
    <ul class="steps steps-vertical h-96">
      <li
        v-for="(edu, index) in edus"
        :key="index"
        class="step step-success !text-start"
      >
        <div>
          <p>
            <strong>{{ edu.program }}</strong>
          </p>
          <p class="text-xs opacity-60">
            {{ edu.school }}
          </p>
          <p>
            <span
              class="tooltip tooltip-bottom align-middle"
              :data-tip="edu.resultType"
            >
              <SvgMortarboard /> </span
            ><span class="align-middle text-sm">&nbsp;{{ edu.result }}</span>
          </p>
        </div>
      </li>
    </ul>
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

<style scoped></style>
