<script lang="ts" setup>
const { login } = useBasic();
</script>

<template>
  <div>
    <h1>Page: login</h1>
    <button px-3 py-2 rounded-md bg-blue-400 @click="login">click</button>
    <NuxtLink px-3 py-2 rounded-md bg-blue-400 to="/">Back</NuxtLink>
  </div>
</template>

<style scoped></style>
