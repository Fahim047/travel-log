<script lang="ts" setup>
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
