<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {computed, useRoute, useHead} from "#imports";

const route = useRoute()
const layout = computed(() => 'default')

useHead({
  titleTemplate: () => {
    return route?.path === '/' ? `Cyclone` : !route?.meta.title ? `Cyclone` : `Cyclone - ${route?.meta.title}`
  },
})
</script>

<style lang="scss">
body{
  @apply bg-white transition-colors dark:bg-gray-800;
}
</style>
