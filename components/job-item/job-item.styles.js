import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 5,
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    paddingLeft: 5,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
