<template>
  <div :id="flipIDAttr" class="flip-card" @click="flip">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipID: {
      type: Number,
      default: 0,
    },
    flipName: {
      type: String,
      default: "def",
    },
  },
  data() {
    return {
      flipIDAttr: null,
    };
  },
  computed: {
    newFlipID() {
      return `flip-card-${this.flipName}-${this.flipID}`;
    },
  },
  mounted() {
    this.flipIDAttr = this.newFlipID;
  },
  methods: {
    flip() {
      const flipCard = document.getElementById(this.flipIDAttr);
      flipCard.classList.toggle("clicked");
    },
  },
};
</script>

<style scoped>
.flip-card {
  @apply card;
  perspective: 1000px;
}

.flip-card .flip-card-inner {
  @apply relative w-full h-full rounded-[inherit] transition-transform duration-700;
  transform-style: preserve-3d;
}

.flip-card.clicked .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  @apply rounded-[inherit];
  transform: rotateX(0deg);
  backface-visibility: hidden;
}

.fip-card-front {
  @apply relative;
}

.flip-card-back {
  @apply absolute top-0 right-0 w-full h-full;
  transform: rotateY(180deg);
}

[data-theme="retro"] .flip-card-back {
  @apply bg-base-200;
}

[data-theme="coffee"] .flip-card-back {
  @apply bg-[var(--dark-b-130)];
}
</style>
