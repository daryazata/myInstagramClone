import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';
import Feed from '../../components/Feed';

const HomeScreen = () => (
  <>
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  </>
);

export default HomeScreen;
