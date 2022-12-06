<template>
  <form :onSubmit="handleSubmit" class="p-2 select-none border-box h-10 bg-gray-100 rounded-md ring-green-300 hover:shadow hover:duration-200 hover:ease-in-out focus-within:ring-2 transition">
    <input class="outline-none bg-transparent" type="search" maxlength="15" placeholder="test search">
    <button type="submit">
      <i class="iconfont icon-sousuo" />
    </button>
  </form>
</template>

<script setup lang="ts">
const handleSubmit = (e: any) => {
  console.log(e)
  e.preventDefault()
}
</script>

<style scoped lang="scss">

</style>
