export const useBasic = () => {
  const getFakeData = (): FormData => {
    const form = new FormData();
    form.append('userName', 'coolName12345678');
    form.append('password', 'coolPassword12345');
    return form;
  };

  const login = async (): Promise<void> => {
    const form = getFakeData();
    const result = await $fetch('/api/login', {
      method: 'POST',
      body: form
    });
    console.log(result);
  };

  const signUp = async (): Promise<void> => {
    const form = getFakeData();
    const result = await $fetch('/api/signUp', {
      method: 'POST',
      body: form
    });
    console.log(result);
  };

  return {
    login,
    signUp
  };
};
