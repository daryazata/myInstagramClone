/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './screens/DiscoveryScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <Feather
              name="camera"
              size={25}
              color={'#000'}
              style={{marginLeft: 20}}
            />
          ),
          headerRight: () => (
            //paper-plane-outline
            <Ionicons
              name="paper-plane-outline"
              size={28}
              color={'#000'}
              style={{marginRight: 20}}
            />
          ),
          headerTitle: () => (
            <Image
              source={require('./assets/images/instagram-logo-black-border-transparent-png.png')}
              style={{width: 160, height: 50}}
            />
          ),
          headerStyle: {
            height: 120, // Specify the height of your custom header
          },
        }}
      />
      {/* <HomeStack.Screen name="Discovery" component={DiscoveryScreen} /> */}
    </HomeStack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Feather name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="instagram" size={size} color={color} />;
            }
            if (route.name === 'Notifications') {
              return <Feather name="heart" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      {/*    <SafeAreaView>
        <HomeScreen />
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
