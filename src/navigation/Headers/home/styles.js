import {StyleSheet} from 'react-native';
import {calcHeight, calcFont, calcFontWeight} from '../../../utils';
import {COLORS, METRICS} from '../../../common';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: METRICS.headerHorizontal,
  },
  headerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: calcHeight(18),
  },
  headerText: {
    color: COLORS.dark,
    fontSize: calcFont(16),
    fontWeight: calcFontWeight('500'),
  },
});
