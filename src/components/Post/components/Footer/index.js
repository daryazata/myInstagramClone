import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Heart from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Fontisto';
import Paperplane from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/FontAwesome';

export default function Footer({likes, caption, postedAt}) {
  const [isLiked, setIsLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(0);

  const pressedLike = () => {
    // !isLiked ? setIsLiked(true) : setIsLiked(false);
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    let sum = amount + countLikes;

    setCountLikes(sum);
  };

  useEffect(() => {
    setCountLikes(likes);
  }, []);

  console.log(isLiked);
  console.log(countLikes);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.iconsLeft}>
            <TouchableWithoutFeedback onPress={pressedLike}>
              <Heart
                name={!isLiked ? `hearto` : `heart`}
                size={30}
                color={!isLiked ? `#545454` : `red`}
              />
            </TouchableWithoutFeedback>
            <CommentIcon name="comment" size={25} color="#545454" />
            <Paperplane
              name="md-paper-plane-outline"
              size={30}
              color="#545454"
            />
          </View>
          <Bookmark name="bookmark-o" size={30} color="#545454" />
        </View>
        <Text style={styles.likes}>{countLikes} Likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
    </>
  );
}
