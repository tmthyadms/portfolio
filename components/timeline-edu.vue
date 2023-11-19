<template>
  <ul
    id="timeline"
    class="timeline timeline-vertical max-md:timeline-compact timeline-snap-icon"
  >
    <template v-for="(edu, index) in edus">
      <li :key="index">
        <hr
          v-if="index !== 0"
          :class="{
            'bg-success': edu.completed && index - 1 !== 0,
          }"
        />
        <div
          :data-aos="aos(index)"
          class="timeline-box w-full"
          :class="{
            'timeline-start md:text-end': isEven(index),
            'timeline-end': !isEven(index),
          }"
        >
          <time class="text-sm font-mono"
            >{{ edu.date.start.year }}&mdash;{{ edu.date.end.year }}</time
          >
          <p class="text-sm md:text-base">
            <strong class="font-medium">{{ edu.program }}</strong>
          </p>
          <p class="mb-2 text-xs opacity-60">
            {{ edu.school }}
          </p>
          <div
            class="tooltip tooltip-secondary tooltip-bottom"
            :data-tip="edu.tip"
          >
            <div class="badge badge-sm badge-outline badge-info">
              {{ edu.result }}
            </div>
          </div>
        </div>
        <div class="timeline-middle flex m-1">
          <div
            class="md:tooltip md:tooltip-secondary"
            :class="{
              'md:tooltip-right': isEven(index),
              'md:tooltip-left': !isEven(index),
            }"
            :data-tip="
              edu.completed ? status.completed.tip : status.inProgress.tip
            "
          >
            <div
              class="p-1 rounded-full"
              :class="{
                'bg-success': edu.completed,
              }"
            >
              <component
                :is="
                  edu.completed ? status.completed.icon : status.inProgress.icon
                "
                :class="{
                  'fill-success-content': edu.completed,
                }"
              />
            </div>
          </div>
        </div>
        <hr
          v-if="index !== edus.length - 1"
          :class="{
            'bg-success': edu.completed,
            'bg-base-300': !edu.completed,
          }"
        />
      </li>
    </template>
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
  data() {
    return {
      status: {
        completed: {
          tip: "Completed",
          icon: "IconCheck",
        },
        inProgress: {
          tip: "In Progress",
          icon: "IconMortarboardFill",
        },
      },
      anims: {
        even: "zoom-in-left",
        odd: "zoom-in-right",
      },
    };
  },
  mounted() {
    // media query from https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range
    const mediaQuery = window.matchMedia("not all and (min-width: 768px)");
    this.aosOnMobile(mediaQuery); // call listener function explicitly at run time
    mediaQuery.addEventListener("change", this.aosOnMobile); // attach listener function to listen in on state changes
  },
  methods: {
    isEven(index) {
      return index % 2 === 0;
    },
    aos(index) {
      const isEven = this.isEven(index);
      const isLast = index === this.edus.length - 1;
      if (isEven) return this.anims.even;
      else return this.anims.odd;
    },
    aosOnMobile(mediaQuery) {
      if (mediaQuery.matches) {
        this.anims = {
          even: "zoom-in-right",
          odd: "zoom-in-right",
        };
      } else {
        this.anims = {
          even: "zoom-in-left",
          odd: "zoom-in-right",
        };
      }
    },
  },
};
</script>
