<template>
  <footer>
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-offset="150"
      class="spacer spacer-art"
    ></div>
    <div class="custom-footer py-10 bg-primary text-primary-content">
      <p class="text-sm font-medium drop-shadow-sm">
        Built with 💖 by
        <span
          class="tooltip"
          data-tip="https://github.com/tmthyadms"
          target="_blank"
        >
          <a
            href="https://github.com/tmthyadms"
            target="_blank"
            class="link hover:no-underline"
            >tmthyadms</a
          >
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.spacer {
  @apply bg-cover aspect-[960/200];
}

.custom-footer {
  @apply grid place-content-center;
}

[data-theme="cupcake"] .spacer-art {
  @apply bg-[url('@/assets/svg/footer-light.svg')];
}

[data-theme="synthwave"] .spacer-art {
  @apply bg-[url('@/assets/svg/footer-dark.svg')];
}
</style>
