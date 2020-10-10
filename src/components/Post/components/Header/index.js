import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

export default function Header({imageUri, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon
        style={styles.icon}
        name="dots-three-horizontal"
        size={20}
        color="#000"
      />
    </View>
  );
}
