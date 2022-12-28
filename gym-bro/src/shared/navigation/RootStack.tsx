import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./AuthNavigation";
import Tabs from "./Tabs";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const userToken = "";

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {userToken ? (
        <RootStack.Screen name="App" component={Tabs} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigation} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
