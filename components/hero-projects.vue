<template>
  <AppHero title="Projects" class="pb-14 md:pb-0">
    <div class="grid md:grid-cols-2 gap-6">
      <AppFlipCard>
        <template #front>
          <AppCard
            title="Sentinel"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            :newProject="true"
            :badges="['Online exam', 'AI proctoring']"
          />
        </template>
        <template #back>
          <p>
            Learn more:
            <span
              class="tooltip tooltip-bottom"
              data-tip="https://github.com/tmthyadms/sentinel"
            >
              <a
                href="https://github.com/tmthyadms/sentinel"
                target="_blank"
                class="link link-info"
                >Sentinel</a
              >
            </span>
          </p>
        </template>
      </AppFlipCard>
      <AppFlipCard>
        <template #front>
          <AppCard
            title="LockNRoll"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            :badges="['Smart home', 'IoT', 'Mobile app']"
          />
        </template>
        <template #back>
          <p>
            Learn more:
            <span
              class="tooltip tooltip-bottom"
              data-tip="https://github.com/tmthyadms/locknroll"
            >
              <a
                href="https://github.com/tmthyadms/locknroll"
                target="_blank"
                class="link link-info"
                >LockNRoll</a
              >
            </span>
          </p>
        </template>
      </AppFlipCard>
    </div>
  </AppHero>
</template>

<script>
export default {};
</script>

<style scoped>
:deep(.flip-card) {
  @apply w-[372px] h-[548px];
}

:deep(.flip-card-inner) {
  @apply rounded-2xl shadow-xl shadow-[hsl(var(--sf))]/[0.25];
}

:deep(.flip-card-back) {
  @apply grid place-content-center rounded-[inherit];
}
</style>
