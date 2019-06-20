/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  Climbr  from "./src/components/screens/Climbr.js";
import LogInScreen from "./src/components/screens/LogIn.js";
import Chat from "./src/components/screens/Chat"
import {createStackNavigator, createAppContainer} from 'react-navigation';

class App extends React.Component{
  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Climbr,
    LogIn: LogInScreen,
    Chat: Chat  
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
