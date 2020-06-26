import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
  },
  imageContainer: {
  },
  title: {
    fontWeight: 'bold'
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderLeftWidth: 3,
    borderLeftColor: colors.black,
    paddingLeft: 5,
    alignSelf: 'stretch'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
});
