<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Hello there
        </h1>
        <p class="py-6">
          Keep track of your travel and adventures. Add locations, photos and notes to create a digital journal of your journeys.
        </p>
        <AuthButton v-if="!authStore.user" />
        <NuxtLink v-else to="/dashboard" class="btn btn-primary">
          Start Logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
