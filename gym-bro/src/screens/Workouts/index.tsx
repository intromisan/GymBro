import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkoutListItem from "./components/WorkoutListItem";
import FloatingActionButton from "../../shared/components/FloatingActionButton";

const Workouts = () => (
  <>
    <ScrollView style={styles.viewContainer}>
      <Text style={styles.subtitle}>3 Workouts</Text>
      <WorkoutListItem title="PPL - 6 days" workoutId="qwe" />
      <WorkoutListItem title="Workout" workoutId="asd" />
      <WorkoutListItem title="Last Workout" workoutId="zxc" />
    </ScrollView>
    <FloatingActionButton onPress={() => alert("Create new workout")} />
  </>
);

export default Workouts;

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 25,
  },
  subtitle: {
    marginTop: 30,
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
    marginBottom: 10,
  },
});
