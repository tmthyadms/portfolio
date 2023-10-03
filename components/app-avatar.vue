<template>
  <div>
    <div class="avatar" :class="hasLoaded ? 'block' : 'hidden'">
      <div class="avatar-ring group w-64 rounded-full">
        <img
          src="profile-pic.jpg"
          alt="Profile picture"
          class="group-hover:scale-150 transition-transform duration-500 ease-out"
          @load="hasLoaded = true"
        />
      </div>
    </div>
    <div class="avatar placeholder" :class="hasLoaded ? 'hidden' : 'block'">
      <div
        class="avatar-ring group w-64 text-neutral-content bg-neutral-focus rounded-full"
      >
        <span
          class="text-7xl group-hover:scale-150 transition-transform duration-500 ease-out"
          >TA</span
        >
      </div>
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
};
</script>

<style scoped>
.avatar-ring {
  @apply outline outline-4 outline-primary outline-double outline-offset-4;
}
</style>
