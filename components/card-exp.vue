<template>
  <AppCard class="group min-h-[24rem] app-border shadow-inner overflow-hidden">
    <div
      class="hidden lg:inline-block tooltip tooltip-secondary tooltip-left self-end"
      data-tip="Current work"
    >
      <div
        class="p-1.5 rounded-box outline outline-1 outline-base-content/[0.2]"
      >
        <IconBriefcase />
      </div>
    </div>
    <h2
      class="m-auto font-serif font-black text-3xl lg:text-4xl text-base-content/[0.25]"
      v-html="exp.company"
    ></h2>
    <div
      class="space-y-2 lg:translate-y-2/3 lg:group-hover:translate-y-0 transition duration-500 ease-out"
    >
      <div
        class="text-start lg:-translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out"
      >
        <time class="text-sm font-mono"
          >{{ startDate }}&mdash;{{ endDate }}</time
        >
      </div>
      <h3
        class="card-title text-lg lg:text-xl lg:-translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out"
      >
        {{ exp.role }}
        <IconArrowRight
          class="hidden lg:block lg:group-hover:animate-none lg:group-hover:translate-x-1 lg:group-hover:opacity-0 transition duration-300"
        />
      </h3>
      <div
        class="space-y-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out lg:group-hover:ease-in"
      >
        <div class="space-y-2" :class="{ 'opacity-60': exp?.desc }">
          <p
            class="flex items-center lg:hidden gap-1 text-xs text-start opacity-60"
          >
            <IconAsterisk :width="8" class="fill-secondary" />
            <span>Current work</span>
          </p>
          <p v-if="exp?.desc" class="text-sm text-start opacity-60">
            {{ exp.desc }}
          </p>
          <template v-else>
            <div class="flex flex-col gap-2">
              <div class="skeleton w-full h-4"></div>
              <div class="skeleton w-3/4 h-4"></div>
            </div>
            <!-- <span class="loading loading-dots loading-xs align-bottom"></span> -->
          </template>
        </div>
        <div class="card-actions justify-center">
          <div
            v-for="(skill, index) in exp.skills"
            :key="index"
            class="badge badge-sm badge-outline badge-info"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script>
export default {
  props: {
    exp: {
      type: Object,
      required: true,
    },
  },
  computed: {
    startDate() {
      return `${this.exp.date.start.month} ${this.exp.date.start.year}`;
    },
    endDate() {
      return `${this.exp.date.end.month} ${this.exp.date.end.year}`;
    },
  },
};
</script>
