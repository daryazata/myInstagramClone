import React, {Component} from 'react';
import {Text, View} from 'react-native';

const CreatePostScreen = () => (
  <View style={{backgroundColor: 'orange', height: '100%'}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 30,
        color: 'white',
      }}>
      Create Post
    </Text>
  </View>
);

export default CreatePostScreen;
