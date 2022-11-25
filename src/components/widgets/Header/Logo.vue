<template>
  <div class="text-2xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-br from-green-400 via-emerald-400 to-cyan-400 animate-roll cursor-pointer select-none" @click="back">
    Cyclone
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "#imports";

const router = useRouter()

const back = () => {
  router.push({path: '/'})
}
</script>

<style scoped lang="scss">

</style>
