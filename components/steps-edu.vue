<template>
  <ul class="steps steps-vertical h-96">
    <li
      v-for="(edu, index) in edus"
      :key="index"
      class="step step-primary !text-start"
    >
      <div>
        <p class="text-sm md:text-base">
          <strong>{{ edu.program }}</strong>
        </p>
        <p class="mb-2 text-xs opacity-60">
          {{ edu.school }}
        </p>
        <div class="tooltip tooltip-primary tooltip-bottom" :data-tip="edu.tip">
          <div class="badge badge-sm badge-outline badge-info">
            {{ edu.result }}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    edus: {
      type: Array,
      required: true,
    },
  },
};
</script>
