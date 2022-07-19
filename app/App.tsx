/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from 'app/src/screens/SignIn';
import AuthenticatedIndex from 'app/src/screens/AuthenticatedIndex';
const Stack = createNativeStackNavigator();
const App = () => {

  const [authenticated, setAuthenticated] = useState(false)
  if (authenticated) {
    return (
      <AuthenticatedIndex />
    )
  }

  return <SignIn setAuthenticated={setAuthenticated} />
};

export default App;
