<script setup lang="ts">
import AuthButton from "../auth-button.vue";
</script>

<template>
  <div class="navbar bg-base-100 text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="font-bold text-emerald-600 text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end gap-2">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
