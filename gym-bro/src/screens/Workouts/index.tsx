import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import WorkoutListItem from "./components/WorkoutListItem";
import FloatingActionButton from "../../shared/components/FloatingActionButton";
import { useGetWorkoutsQuery } from "../../redux/services/workouts";
import colors from "../../shared/variables/colors";

const Workouts = () => {
  const {
    data: workoutList,
    isLoading,
    refetch: refetchWorkoutList,
  } = useGetWorkoutsQuery();

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

  if (!workoutList)
    return (
      <View>
        <Text>Could not retrieve the workout list</Text>
      </View>
    );

  if (workoutList.length === 0)
    return (
      <>
        <ScrollView
          style={styles.viewContainer}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetchWorkoutList}
            />
          }
        >
          <Text style={styles.subtitle}>You don't have workouts yet</Text>
        </ScrollView>
        <FloatingActionButton onPress={() => alert("Create new workout")} />
      </>
    );

  return (
    <>
      <ScrollView
        style={styles.viewContainer}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetchWorkoutList}
          />
        }
      >
        <Text style={styles.subtitle}>{workoutList?.length} Workouts</Text>
        {workoutList.map((workout) => (
          <WorkoutListItem key={workout.id} {...workout} />
        ))}
      </ScrollView>
      <FloatingActionButton onPress={() => alert("Create new workout")} />
    </>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 25,
  },
  spinnerContainer: {
    marginTop: "50%",
  },
  subtitle: {
    marginTop: 30,
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
    marginBottom: 10,
  },
});
