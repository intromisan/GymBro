import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Workouts from "../../screens/Workouts";
import WorkoutDetails from "../../screens/Workouts/components/WorkoutDetails";
import { WorkoutNavigationProps } from "../types";

const WorkoutNavigation = () => {
  const WorkoutStack = createStackNavigator<WorkoutNavigationProps>();

  return (
    <WorkoutStack.Navigator initialRouteName="Workouts">
      <WorkoutStack.Screen
        name="Workouts"
        options={{ headerMode: "screen" }}
        component={Workouts}
      />
      <WorkoutStack.Screen name="WorkoutDetails" component={WorkoutDetails} />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutNavigation;
