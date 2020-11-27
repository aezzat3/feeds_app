import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';
import {calcFont} from '../../utils';
const styles = StyleSheet.create({
  text: {
    // ...FONTS.medium,
    color: COLORS.dark,
    fontSize: calcFont(15),
    textAlign: 'right',
  },
});

export default styles;
