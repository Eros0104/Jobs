import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default StyleSheet.create({
  view: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    marginTop: 5,
  },
  text: {
    color: colors.white,
  },
});
