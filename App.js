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
import Chat from "./src/components/screens/Chat";
import CreateUser from "./src/components/screens/CreateUser.js";
import Threads from "./src/components/screens/Threads.js"
import {createStackNavigator, createAppContainer} from 'react-navigation';

class App extends React.Component{
  render() {
    return (
      <View>
        <Climbr />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Climbr,
    LogIn: LogInScreen,
    Chat: Chat,
    Create: CreateUser,
    // Threads: Threads,
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
