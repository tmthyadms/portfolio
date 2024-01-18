<template>
  <div class="avatar" :class="{ 'avatar-placeholder': !hasLoaded }">
    <div
      class="avatar-ring group !flex w-48 items-center justify-center rounded-full md:w-64"
    >
      <span v-if="!hasLoaded" class="text-7xl">TA</span>
      <img
        v-show="hasLoaded"
        src="profile-pic.png"
        alt="Profile picture"
        id="profile-pic"
        class="transition-transform duration-500 ease-out group-hover:scale-125"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLoaded: false,
    };
  },
  mounted() {
    const profilePic = document.getElementById("profile-pic");
    const isCompleted = profilePic.complete;
    const hasNaturalWidth = profilePic.naturalWidth > 0;
    this.hasLoaded = isCompleted && hasNaturalWidth;
  },
};
</script>

<style scoped>
.avatar-ring {
  @apply outline-dashed outline-4 outline-offset-4 outline-primary;
}
</style>
