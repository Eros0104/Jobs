import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Icon from '../icon/icon';

import styles from './header.styles';
import {colors} from '../../assets';

const Header = ({title}) => (
  <>
    <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
    <View style={styles.container}>
      <Icon name="home-outline" size={30} color={colors.secondary} />
      <Text style={styles.text}>{title}</Text>
      <Icon name="cogs" size={30} color={colors.secondary} />
    </View>
  </>
);

export default Header;
