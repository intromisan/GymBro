import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../shared/variables/colors";
import { IWorkoutExercise } from "../../../shared/interfaces";

const WorkoutExerciseListItem: FC<IWorkoutExercise> = ({
  exercise,
  weight,
  sets,
  reps,
}) => {
  return (
    <View style={styles.container}>
      {exercise.imageLink ? (
        <Image style={styles.image} source={{ uri: `${exercise.imageLink}` }} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Ionicons name="ios-image-outline" size={36} color="gray" />
        </View>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {exercise.description}
        </Text>
        <Text style={[styles.subTitle, styles.last]}>
          {sets}x{reps} {weight}kg
        </Text>
      </View>
    </View>
  );
};

export default WorkoutExerciseListItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 7,
  },
  imagePlaceholder: {
    width: 90,
    height: 95,
    marginRight: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  image: {
    width: 90,
    height: 95,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    height: 95,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    textTransform: "capitalize"
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
  },
  last: {
    marginTop: "auto",
  },
});
