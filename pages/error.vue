<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occurred";
</script>

<template>
  <div class="card bg-base-300 max-w-3xl mx-auto min-h-75 flex justify-center items-center gap-5">
    <div role="alert" class="alert alert-error font-medium">
      <span>Oh no!, {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home <Icon name="tabler:arrow-left" size="24" />
    </NuxtLink>
  </div>
</template>
