import React from 'react';
import {View, Text} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import styles from './styles';

export default function Post({post}) {
  return (
    <View style={styles.container}>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        caption={post.caption}
        likes={post.likes}
        postedAt={post.postedAt}
      />
    </View>
  );
}
