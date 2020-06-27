import React from 'react';
import {View, Text} from 'react-native';
import style from './job-item.styles';
import Image from '../image/image';
import Button from '../button/button';

const JobItem = ({salary, title, photo, onOpen, onSubscribe}) => (
  <View style={style.container}>
    <View>
      <Image source={photo} style={style.image} />
    </View>
    <View style={style.contentContainer}>
      <Text style={style.title}>{title}</Text>
      <Text>R${salary}</Text>
      <View style={style.buttonArea}>
        <Button onPress={onOpen}>Abrir</Button>
        <Button onPress={onSubscribe}>Quero me canditar</Button>
      </View>
    </View>
  </View>
);

export default JobItem;
