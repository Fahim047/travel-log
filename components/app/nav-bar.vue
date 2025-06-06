<template>
  <div class="navbar bg-base-100 text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="font-bold text-emerald-600 text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end gap-2">
      <AppThemeToggle />
      <button class="btn btn-accent">
        Sign In With Github
        <Icon name="tabler:brand-github" size="24" />
      </button>
    </div>
  </div>
</template>
