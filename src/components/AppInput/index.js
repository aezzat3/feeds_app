import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

let AppInput = ({...rest}) => {
  return <TextInput style={styles.container} {...rest} />;
};

AppInput = React.memo(AppInput);

export {AppInput};
