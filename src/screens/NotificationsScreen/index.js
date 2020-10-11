import React, {Component} from 'react';
import {Text, View} from 'react-native';

const NotificationsScreen = () => (
  <View style={{backgroundColor: 'orange', height: '100%'}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 30,
        color: 'white',
      }}>
      Notifications
    </Text>
  </View>
);

export default NotificationsScreen;
