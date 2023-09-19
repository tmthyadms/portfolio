<template>
  <AppHero title="Projects" class="pb-14 md:pb-0">
    <div class="grid md:grid-cols-2 gap-6">
      <AppCard
        title="Sentinel"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        :newProject="true"
        :badges="['AI', 'Exam']"
      />
      <AppCard
        title="LockNRoll"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        :badges="['Smart home', 'Mobile app']"
      />
    </div>
  </AppHero>
</template>

<script>
export default {};
</script>

<style scoped></style>
