import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  likes: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 7,
  },
  caption: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 7,
  },
  postedAt: {
    fontWeight: '500',
    fontSize: 13,
    paddingBottom: 7,
    color: 'grey',
  },
  iconsLeft: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: 110,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
});
export default styles;
