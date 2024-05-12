import type { User } from 'lucia';

export const useAuthStore = defineStore('useAuthStore', () => {
  const user = shallowRef<User | null>(null);
  // const authUser = computed<User>(() => {
  //   const currentUser = unref(user);
  //   if (!currentUser) {
  //     throw createError({
  //       message: 'this is protected page'
  //     });
  //   }
  //   return currentUser;
  // });
  //
  const setUser = (currentUser: User): void => {
    user.value = currentUser;
  };

  return {
    //refs::
    user,

    //computed::
    // authUser,

    //methods::
    setUser
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
