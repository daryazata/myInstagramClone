import React from 'react';
import Post from '../Post/index';
import {FlatList} from 'react-native';
import Stories from '../Stories';

const posts = [
  {
    user: {
      id: '1',
      imageUri:
        'https://tse1.mm.bing.net/th?id=OIP.CAAJQIbnp4BhhgJaMGrEagHaLG&pid=Api',
      name: 'Julia',
    },
    imageUri:
      'https://images.unsplash.com/photo-1602311744487-f35e4962d27f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',

    caption: 'La Manche #France',
    likes: 405,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      id: '2',
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brad_Pitt_2012.jpg/1200px-Brad_Pitt_2012.jpg',
      name: 'Brad',
    },
    imageUri:
      'https://images.unsplash.com/photo-1601758282760-b6cc3d07523d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',

    caption: 'Home #Pets',
    likes: 50,
    postedAt: '16 minutes ago',
  },
  {
    user: {
      id: '3',
      imageUri:
        'https://hotactressangelinajolie.files.wordpress.com/2015/01/hot-actress-angelina-jolie-young.jpg',
      name: 'Angelina',
    },
    imageUri:
      'https://images.unsplash.com/photo-1602251627070-6a9bab4e420e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',

    caption: 'NY #goodvibes',
    likes: 80,
    postedAt: '30 minutes ago',
  },
];
export default function Feed() {
  return (
    <>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={({item, index}) => index}
        ListHeaderComponent={Stories}
      />
    </>
  );
}
