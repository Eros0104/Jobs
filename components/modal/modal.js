import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Animated, Dimensions} from 'react-native';
import Icon from '../icon/icon';
import Button from '../button/button';
import Image from '../image/image';
import styles from './modal.style';

const {height} = Dimensions.get('window');

const Modal = ({isOpen, onClose, job, onSubscribe}) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {toValue: 0, duration: 100}),
      Animated.timing(state.opacity, {toValue: 1, duration: 300}),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {toValue: 0, duration: 300}),
      Animated.timing(state.container, {toValue: height, duration: 100}),
    ]).start();
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{translateY: state.container}],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateY: state.modal}],
          },
        ]}>
        <View style={styles.header}>
          <Icon
            name="close"
            size={50}
            style={styles.closeIcon}
            onPress={onClose}
          />
        </View>
        {job && (
          <>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={job.photo} />
            </View>
            <ScrollView style={styles.contentContainer}>
              <Text style={styles.title}>{job.title}</Text>
              <Text>Salário: R${job.salary}</Text>
              <Text>Descrição:</Text>
              <Text>{job.description}</Text>
              <Button onPress={onSubscribe}>Inscrever-se!</Button>
              <Button onPress={onClose}>Fechar</Button>
            </ScrollView>
          </>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;
