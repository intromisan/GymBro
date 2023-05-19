import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../../screens/Home";
import Workouts from "../../screens/Workouts";
import Settings from "../../screens/Settings";
import colors from "../variables/colors";
import WorkoutDetails from "../../screens/Workouts/components/WorkoutDetails";
import WorkoutNavigation from "./WorkoutNavigation";

const Tab = createBottomTabNavigator();
type MaterialIconName = React.ComponentProps<typeof Ionicons>["name"];

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName!: MaterialIconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "ios-home-outline";
          } else if (route.name === "WorkoutsTab") {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (route.name === "SettingsTab") {
            iconName = focused ? "ios-cog" : "ios-cog-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { height: 80, paddingBottom: 20, paddingTop: 10 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeTab"
        options={{ title: "Home", headerTitle: "Home" }}
        component={Home}
      />
      <Tab.Screen
        name="WorkoutsTab"
        options={{
          title: "Workouts",
          headerTitle: "Workouts",
          headerShown: false,
        }}
        component={WorkoutNavigation}
      />
      <Tab.Screen
        name="SettingsTab"
        options={{ title: "Settings", headerTitle: "Settings" }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
