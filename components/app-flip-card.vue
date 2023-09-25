<template>
  <div class="flip-card">
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

<style scoped>
.flip-card {
  @apply card;
  perspective: 1000px;
}

.flip-card-inner {
  @apply relative w-full h-full rounded-[inherit] transition-transform duration-700;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  @apply absolute w-full h-full rounded-[inherit];
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

[data-theme="retro"] .flip-card-back {
  @apply bg-base-200;
}

[data-theme="coffee"] .flip-card-back {
  @apply bg-[var(--dark-b-130)];
}
</style>
