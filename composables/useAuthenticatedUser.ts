import type { User } from 'lucia';

export const useAuthenticatedUser = () => {
  const { user } = storeToRefs(useAuthStore());
  return computed<User>(() => {
    const currentUser = unref(user);
    if (!currentUser) {
      throw createError({
        message: 'useAuthenticatedUser() can only be used in protected page'
      });
    }
    return currentUser;
  });
};
