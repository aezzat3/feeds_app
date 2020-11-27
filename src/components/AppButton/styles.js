import {StyleSheet} from 'react-native';

import {FONTS, COLORS} from '../../common';
import {calcFont, calcHeight, calcWidth} from '../../utils';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    height: calcHeight(60),
    width: calcWidth(300),
    paddingHorizontal: calcWidth(10),
    borderRadius: calcHeight(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    color: '#fff',
    // ...FONTS.bold,
    fontSize: calcFont(16.7),
  },

  bottomButton: {
    position: 'absolute',
    borderRadius: null,
    width: null,
    bottom: 0,
    right: 0,
    left: 0,
  },

  horizontalButton: {
    flexDirection: 'row',
  },
});

export default styles;
