<template>
  <footer>
    <div class="spacer spacer-footer"></div>
    <div class="custom-footer py-10 bg-primary text-primary-content">
      <p class="text-sm font-semibold drop-shadow-sm">
        Built with 💖 by
        <span
          class="tooltip"
          data-tip="https://github.com/tmthyadms"
          target="_blank"
        >
          <a href="https://github.com/tmthyadms" target="_blank" class="link"
            >tmthyadms</a
          >
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  @apply grid place-content-center;
}

[data-theme="retro"] .spacer-footer {
  @apply bg-[url('@/assets/svg/layered-waves-light.svg')];
}

[data-theme="coffee"] .spacer-footer {
  @apply bg-[url('@/assets/svg/layered-waves-dark.svg')];
}
</style>
