import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen from "../../screens/Auth/SignupScreen";

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
