import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { SECRET_firebaseConfig } from './config';

const firebaseConfig = SECRET_firebaseConfig;

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: {screen: LoadingScreen},
    SignIn: {screen: SignInScreen},
    SignUp: {screen: SignUpScreen},
    Home: {screen: HomeScreen},
  },
  {
    // Launcher Screen
    initialRouteName: "Loading"
  }
)

// Create app container
const App = createAppContainer(MainNavigator);
export default App;

