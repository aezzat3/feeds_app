import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

let AppText = ({children, style, ...rest}) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

AppText = React.memo(AppText);
export {AppText};
