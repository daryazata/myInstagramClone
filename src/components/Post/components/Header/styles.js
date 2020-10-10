import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',

    /* justifyContent: 'center', */
  },
  name: {
    alignSelf: 'center',
    fontWeight: '600',
  },
  userInfo: {
    flexDirection: 'row',
  },
  icon: {
    /*  alignSelf: 'center', */
    marginRight: 10,
  },
});
export default styles;
