export default defineNuxtRouteMiddleware(async (to, from) => {
  const { setUser } = useAuthStore();
  const currentUser = await $fetch('/api/user');
  if (currentUser) {
    setUser(currentUser);
  }
});
