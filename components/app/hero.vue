<script setup lang="ts">
import AuthButton from "../auth-button.vue";
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
        <AuthButton />
      </div>
    </div>
  </div>
</template>
