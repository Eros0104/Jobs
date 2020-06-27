import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    elevation: 10,
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 170 / 2,
    top: -50,
    borderWidth: 4,
    borderColor: colors.white,
  },
  header: {
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 100,
  },
  closeIcon: {
    color: colors.textOnSecondary,
    alignSelf: 'flex-end',
    margin: 10,
  },
  contentContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 30,
  },
});
