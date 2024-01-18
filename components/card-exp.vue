<template>
  <AppCard class="app-border group min-h-[24rem] overflow-hidden shadow-inner">
    <div
      class="tooltip tooltip-left tooltip-secondary hidden self-end lg:inline-block"
      data-tip="Current work"
    >
      <div
        class="rounded-box p-1.5 outline outline-1 outline-base-content/[0.2]"
      >
        <IconBriefcase />
      </div>
    </div>
    <h2
      class="m-auto font-serif text-3xl font-black text-base-content/[0.25] lg:text-4xl"
      v-html="exp.company"
    ></h2>
    <div
      class="space-y-2 transition duration-500 ease-out lg:translate-y-2/3 lg:group-hover:translate-y-0"
    >
      <div
        class="text-start transition-transform duration-500 ease-out lg:-translate-y-full lg:group-hover:translate-y-0"
      >
        <time class="font-mono text-sm"
          >{{ startDate }}&mdash;{{ endDate }}</time
        >
      </div>
      <h3
        class="card-title text-lg transition-transform duration-500 ease-out lg:-translate-y-full lg:text-xl lg:group-hover:translate-y-0"
      >
        {{ exp.role }}
        <IconArrowRight
          class="hidden transition duration-300 lg:block lg:group-hover:translate-x-1 lg:group-hover:animate-none lg:group-hover:opacity-0"
        />
      </h3>
      <div
        class="space-y-2 transition-all duration-300 ease-out lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:ease-in"
      >
        <div class="space-y-2" :class="{ 'opacity-60': exp?.desc }">
          <p
            class="flex items-center gap-1 text-start text-xs opacity-60 lg:hidden"
          >
            <IconAsterisk :width="8" class="fill-secondary" />
            <span>Current work</span>
          </p>
          <div
            v-if="exp?.desc"
            class="text-start text-sm opacity-60"
            v-html="exp.desc"
          ></div>
          <template v-else>
            <div class="flex flex-col gap-2">
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-3/4"></div>
            </div>
            <!-- <span class="loading loading-dots loading-xs align-bottom"></span> -->
          </template>
        </div>
        <div class="card-actions justify-center">
          <div
            v-for="(skill, index) in exp.skills"
            :key="index"
            class="badge badge-info badge-outline badge-sm"
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
