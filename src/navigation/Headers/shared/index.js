import React from 'react';
import {View, Alert} from 'react-native';
import {calcWidth} from '../../../utils';
import {PressedIcon, AppText} from '../../../components';
import {ICONS, COLORS, METRICS} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useSafeArea} from 'react-native-safe-area-context';

const SharedHeader = ({title}) => {
  const navigation = useNavigation();
  const {top} = useSafeArea();
  const extraHeightStyle = {
    height: METRICS.headerHeight,
    paddingTop: top,
  };
  return (
    <View style={[styles.container, extraHeightStyle]}>
      <View style={styles.headerContentContainer}>
        <PressedIcon
          name={ICONS.heart}
          size={calcWidth(20)}
          color={COLORS.dark}
          onPress={() => Alert.alert('COMMING SOON')}
        />
        <AppText style={styles.headerText}>{title}</AppText>
        <PressedIcon
          name={ICONS.chat}
          size={calcWidth(20)}
          color={COLORS.dark}
          onPress={() => Alert.alert('COMMING SOON')}
        />
      </View>
    </View>
  );
};

export {SharedHeader};
