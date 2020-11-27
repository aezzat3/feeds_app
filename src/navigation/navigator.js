/** AUTH STACK NAVIGATOR */
export const navigateToAuth = (navigation) => {
  navigation.reset({
    routes: [
      {
        name: 'Tabs',
      },
    ],
  });
};
export const navigateToRegister = (navigation) => {
  navigation.navigate('Register');
};
