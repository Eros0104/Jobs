import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textOnPrimary,
  },
  statusBar: {
    backgroundColor: colors.darkPrimary,
  },
});
