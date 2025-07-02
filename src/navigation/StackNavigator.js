import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/auth/LoginScreen";
import SignUp from "../screens/auth/SignUpScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;