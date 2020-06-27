import React from 'react';
import {View} from 'react-native';
import Icon from '../icon/icon';

import styles from './footer.styles';
import {colors} from '../../assets';

const Footer = ({title}) => (
  <View style={styles.container}>
    <Icon name="home-outline" size={30} color={colors.secondary} />
    <Icon
      name="feature-search-outline"
      size={30}
      color={colors.textOnPrimary}
    />
    <Icon name="book-outline" size={30} color={colors.textOnPrimary} />
    <Icon name="heart-outline" size={30} color={colors.textOnPrimary} />
    <Icon
      name="account-circle-outline"
      size={30}
      color={colors.textOnPrimary}
    />
  </View>
);

export default Footer;
