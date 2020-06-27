import React from 'react';
import {View, ScrollView} from 'react-native';
import style from './container.styles';

const Button = ({children}) => (
  <View style={style.view}>
    <ScrollView style={style.scrollView}>{children}</ScrollView>
  </View>
);

export default Button;
