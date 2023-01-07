import { StyleSheet, Text, View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { WorkoutNavigationProps } from "../../../shared/types";

type Props = StackScreenProps<WorkoutNavigationProps, "WorkoutDetails">;
type WorkoutDetailsScreenRouteProp = Props["route"];

interface WorkoutDetailsProps {
  route: WorkoutDetailsScreenRouteProp;
}

const WorkoutDetails: FC<WorkoutDetailsProps> = ({ route }) => {
  return (
    <View>
      <Text>{route.params.workoutId}</Text>
    </View>
  );
};

export default WorkoutDetails;

const styles = StyleSheet.create({});
