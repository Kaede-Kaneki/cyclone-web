<template>
  <nav class="px-4 md:px-5">
    <nuxt-link class="navbar-item" to="/article" active-class="active">文章</nuxt-link>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.navbar-item{
  @apply flex items-center justify-center px-6 h-10 text-base-color rounded-md transition-colors hover:bg-base-hover-color hover:ease-in-out hover:duration-200;
}
</style>
