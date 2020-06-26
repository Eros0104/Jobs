import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../icon/icon'

import styles from './footer.styles';

const Footer = ({ title }) => (
  <View style={styles.container}>
    <Icon name="home" size={30} color="#fff" />
    <Text style={styles.text}>{title}</Text>
    <Icon name="account-circle" size={30} color="#fff" />
  </View>
);

export default Footer;
