import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function Body({imageUri}) {
  return (
    <View>
      <Image style={styles.image} source={{uri: imageUri}} />
    </View>
  );
}
