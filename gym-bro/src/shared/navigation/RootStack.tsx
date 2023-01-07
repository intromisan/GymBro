import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./AuthNavigation";
import Tabs from "./Tabs";
import { useAppDispatch, useAppSelector } from "../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onSignIn } from "../../redux/slices/userSlice";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const { userToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) dispatch(onSignIn(token));
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserToken();
  }, [userToken]);

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
