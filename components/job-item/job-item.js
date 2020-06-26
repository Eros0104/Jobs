import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import style from './job-item.styles';
import Image from '../image/image'

const JobItem = ({ description, salary, title, photo }) => (
  <View style={style.container}>
    <View style={style.imageContainer}>
      <Image source={photo} style={style.image}/>
    </View>
    <View style={style.contentContainer}>
      <Text style={style.title}>{title}</Text>
      <Text>R${salary},00</Text>
      <Text>{description}</Text>
    </View>
  </View>
);


export default JobItem;
