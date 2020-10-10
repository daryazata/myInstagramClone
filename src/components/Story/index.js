import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {View, Text} from 'react-native';
import styles from './styles';

const Story = ({imageUri, name}) => (
  <>
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.text}>{name} </Text>
    </View>
  </>
);

export default Story;
