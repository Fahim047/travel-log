<script lang="ts" setup>
const authStore = useAuthStore();
onMounted(() => authStore.signOut());
</script>

<template>
  <div class="card bg-base-300 max-w-3xl mx-auto min-h-75 flex justify-center items-center gap-5">
    <span class="loading loading-spinner loading-xl" />
  </div>
</template>
