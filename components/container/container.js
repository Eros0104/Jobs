import React from 'react';
import { ScrollView } from 'react-native';
import style from './container.styles';

const Button = ({ children }) => (
  <ScrollView style={style.view}>
    {children}
  </ScrollView>
);

export default Button;
