export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = storeToRefs(useAuthStore());
  if (!user.value) return navigateTo('/login');
});
