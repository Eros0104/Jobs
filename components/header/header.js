import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Icon from '../icon/icon'

import styles from './header.styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
    <Icon name="home" size={30} color="#fff" />
    <Text style={styles.text}>{title}</Text>
    <Icon name="account-circle" size={30} color="#fff" />
  </View>
);

export default Header;
