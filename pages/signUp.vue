<script lang="ts" setup>
const { signUp } = useBasic();
</script>

<template>
  <div>
    <h1>sign up</h1>
    <button px-3 py-2 rounded-md bg-blue-400 @click="signUp">click</button>
    <NuxtLink px-3 py-2 rounded-md bg-blue-400 to="/">Back</NuxtLink>
  </div>
</template>

<style scoped></style>
