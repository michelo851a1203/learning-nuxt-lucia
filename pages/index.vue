<script lang="ts" setup></script>

<template>
  <div px-8 py-6>
    <h1>Page: index</h1>
    <div grid="~ cols-2 gap-x-4 box-border">
      <NuxtLink px-3 py-2 rounded-md bg-blue-400 to="/login">To Login page</NuxtLink>
      <NuxtLink px-3 py-2 rounded-md bg-blue-400 to="/signUp">To SignUp page</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
