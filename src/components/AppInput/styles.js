import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../utils';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  container: {
    width: calcWidth(302),
    height: calcHeight(48),
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    textAlign: 'right',
    paddingHorizontal: calcWidth(10),
  },
});

export default styles;
