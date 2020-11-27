/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {navigateToAuth} from '../../navigation/navigator';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    startup();
  }, []);

  const startup = async () => {
    setTimeout(() => {
      navigateToAuth(navigation);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text>SPLASH</Text>
    </View>
  );
};

export default Splash;
