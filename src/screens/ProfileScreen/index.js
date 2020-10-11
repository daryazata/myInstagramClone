import React, {Component} from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = () => (
  <View style={{backgroundColor: 'orange', height: '100%'}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 30,
        color: 'white',
      }}>
      Profile
    </Text>
  </View>
);

export default ProfileScreen;
