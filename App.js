import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './navigation/MainStack';
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar
        backgroundColor='#f5efdb'
        barStyle='dark-content'
      />
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
