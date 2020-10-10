import React from 'react';
import Story from '../Story';
import {View, FlatList} from 'react-native';

const data = [
  {
    id: '1',
    imageUri:
      'https://tse1.mm.bing.net/th?id=OIP.CAAJQIbnp4BhhgJaMGrEagHaLG&pid=Api',
    name: 'Julia',
  },
  {
    id: '2',
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brad_Pitt_2012.jpg/1200px-Brad_Pitt_2012.jpg',
    name: 'Brad',
  },
  {
    id: '3',
    imageUri:
      'https://hotactressangelinajolie.files.wordpress.com/2015/01/hot-actress-angelina-jolie-young.jpg',
    name: 'Angelina',
  },
  {
    id: 'r',
    imageUri: 'http://www.theplace2.ru/archive/richard_gere/img/9e929_gere.jpg',
    name: 'Richi',
  },
];

const Stories = () => (
  <View>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
);

export default Stories;
