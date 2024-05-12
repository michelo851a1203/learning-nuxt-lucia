export default defineNuxtRouteMiddleware(async (to, from) => {
  const { setUser } = useAuthStore();
  const currentUser = await $fetch('/api/user');
  console.log('currentUser', currentUser);
  if (currentUser) {
    setUser(currentUser);
  }
});
