import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';
import {calcHeight, calcWidth} from '../../utils';
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginVertical: calcHeight(5),
    padding: calcWidth(5),
  },
  avatarStyle: {
    width: calcWidth(50),
    height: calcWidth(50),
    borderRadius: calcWidth(50),
  },
  cardHeader: {
    flexDirection: 'row',
    marginTop: calcHeight(10),
  },
  imageWithName: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameStyle: {
    marginLeft: calcWidth(10),
  },
  timeStyle: {
    width: '45%',
    alignSelf: 'center',
  },
  postContent: {
    flex: 1,
    alignItems: 'flex-start',
    margin: calcHeight(10),
  },
  postImage: {
    width: '100%',
    height: '90%',
    marginTop: calcHeight(10),
  },
  lineStyle: {
    borderWidth: 0.2,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: COLORS.dark,
    marginVertical: calcHeight(10),
  },
  footerStyle: {
    height: calcHeight(30),
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
    marginLeft: calcWidth(10),
  },
});
export default styles;
