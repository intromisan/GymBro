import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { WorkoutNavigationProps } from "../../../shared/types";
import { useGetWorkoutQuery } from "../../../redux/services/workouts";
import FloatingActionButton from "../../../shared/components/FloatingActionButton";
import colors from "../../../shared/variables/colors";
import { RefreshControl } from "react-native-gesture-handler";
import WorkoutExerciseListItem from "./WorkoutExerciseListItem";

type Props = StackScreenProps<WorkoutNavigationProps, "WorkoutDetails">;
type WorkoutDetailsScreenRouteProp = Props["route"];

interface WorkoutDetailsProps {
  route: WorkoutDetailsScreenRouteProp;
}

const WorkoutDetails: FC<WorkoutDetailsProps> = ({ route }) => {
  const {
    data: workout,
    isLoading,
    refetch,
  } = useGetWorkoutQuery(route.params.workoutId);  

  if (isLoading)
    return (
      <>
        <ScrollView style={styles.viewContainer}>
          <View style={styles.spinnerContainer}>
            <ActivityIndicator
              animating={true}
              color={colors.primary}
              size={54}
            />
          </View>
        </ScrollView>
        <FloatingActionButton onPress={() => alert("Create new workout")} />
      </>
    );

  if (!workout)
    return (
      <View>
        <Text>Could not retrieve the workout details</Text>
      </View>
    );

  return (
    <>
      <ScrollView
        style={styles.viewContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      >
        <Text style={styles.title}>{workout.name}</Text>
        <Text style={styles.subtitle}>Monday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 0)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Tuesday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 1)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Wednesday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 2)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Thursday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 3)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Friday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 4)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Saturday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 5)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
        <Text style={styles.subtitle}>Sunday</Text>
        {workout.exercises
          ?.filter((exercise) => exercise.weekday === 6)
          .map((exercise) => (
            <WorkoutExerciseListItem key={exercise.id} {...exercise} />
          ))}
      </ScrollView>
      <FloatingActionButton onPress={() => alert("Create new workout")} />
    </>
  );
};

export default WorkoutDetails;

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 25,
    backgroundColor: "#F7F7F7"
  },
  spinnerContainer: {
    marginTop: "50%",
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    color: "black",
    fontWeight: "600",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  subtitle: {
    marginTop: 30,
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    marginBottom: 10,
  },
});
