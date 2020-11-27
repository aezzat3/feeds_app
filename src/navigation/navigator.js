/** AUTH STACK NAVIGATOR */
export const navigateToAuth = (navigation) => {
  navigation.reset({
    routes: [
      {
        name: 'Auth',
      },
    ],
  });
};
export const navigateToRegister = (navigation) => {
  navigation.navigate('Register');
};
