import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppText} from '../AppText';
import styles from './styles';
import {useSafeArea} from 'react-native-safe-area-context';
import {calcHeight} from '../../utils';

let AppButton = ({
  title,
  isBottom,
  style,
  titleStyle,
  onPress,
  disabled,
  left,
  right,
  ...props
}) => {
  const {bottom} = useSafeArea();
  const buttonHeight = {height: calcHeight(60) + bottom / 2};
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.disabledStyle,
    isBottom && [styles.bottomButton, buttonHeight],
    (right || left) && [styles.horizontalButton],
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
      {...props}>
      {left}
      <AppText style={[styles.text, titleStyle]}>{title}</AppText>
      {right}
    </TouchableOpacity>
  );
};

AppButton = React.memo(AppButton);
export {AppButton};
