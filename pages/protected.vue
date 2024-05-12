<script lang="ts" setup>
definePageMeta({
  middleware: ['protected']
});
const authUser = useAuthenticatedUser();
</script>

<template>
  <div>
    <h1>current user is {{ authUser.userName }}</h1>
    <div>this is protected page , and your id is {{ authUser.id }}</div>
  </div>
</template>

<style scoped></style>
