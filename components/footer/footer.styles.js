import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  statusBar: {
    backgroundColor: colors.darkPrimary,
  },
});
