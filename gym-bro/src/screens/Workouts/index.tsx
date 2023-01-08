import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import WorkoutListItem from "./components/WorkoutListItem";
import FloatingActionButton from "../../shared/components/FloatingActionButton";
import { useGetWorkoutsQuery } from "../../redux/services/workouts";
import colors from "../../shared/variables/colors";

const Workouts = () => {
  const { data: workoutList, isLoading } = useGetWorkoutsQuery();

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
        <Text>No workouts</Text>
      </View>
    );

  return (
    <>
      <ScrollView style={styles.viewContainer}>
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
