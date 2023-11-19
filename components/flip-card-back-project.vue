<template>
  <p>
    <span v-if="project?.remarks">
      {{ project.remarks }}
      <br /><br />
    </span>
    <span>Learn more:</span>
    <span class="tooltip tooltip-primary tooltip-bottom" :data-tip="project.url"
      ><a
        :href="project.url"
        target="_blank"
        class="link link-accent link-hover group/url flex gap-2 items-center"
        ><span>{{ project?.urlTitle ?? project.title }}</span>
        <IconBoxArrowUpRight
          class="group-hover/url:translate-x-1 transition-transform duration-300 group-hover:ease-out"
        />
      </a>
    </span>
  </p>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
