import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

let PressedText = ({children, style, onPress, ...rest}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  </TouchableOpacity>
);

PressedText = React.memo(PressedText);
export {PressedText};
