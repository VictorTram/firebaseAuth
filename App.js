import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const firebaseConfig = {
  apiKey: "AIzaSyDidjO8STT5SZPbfmr-UjPgdj0FDSpiInw",
  authDomain: "reactbootcamp-f2fa8.firebaseapp.com",
  databaseURL: "https://reactbootcamp-f2fa8.firebaseio.com",
  projectId: "reactbootcamp-f2fa8",
  storageBucket: "",
  messagingSenderId: "428067339054",
  appId: "1:428067339054:web:f161d311dc5ef66aeb98bf"
};

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

