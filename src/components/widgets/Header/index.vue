<template>
  <header class="sticky top-0 backdrop-blur-sm flex items-center h-14 px-4 md:px-5 bg-base-color shadow">
    <Logo/>
    <div class="flex-1"/>
    <Navbar/>
    <ColorMode/>
  </header>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import ColorMode from './ColorMode.vue'
import Navbar from './Navbar.vue'
</script>

<style scoped lang="scss">

</style>
