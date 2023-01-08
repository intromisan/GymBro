import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import { WorkoutNavigationProps } from "../../../shared/types";

type Props = StackScreenProps<WorkoutNavigationProps, "WorkoutDetails">;
type ProfileScreenNavigationProp = Props["navigation"];

interface WorkoutListItemProps {
  name: string;
  id: string;
  navigation?: ProfileScreenNavigationProp;
}

const WorkoutListItem: FC<WorkoutListItemProps> = ({ name, id }) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <Pressable
      style={styles.workoutContainer}
      onPress={() => navigation.navigate("WorkoutDetails", { workoutId: id })}
    >
      <View style={styles.photoPlaceholder}>
        <Ionicons name="ios-image-outline" size={36} color="gray" />
      </View>
      <View style={styles.information}>
        <Text style={styles.workoutTitle}>{name}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.iconButton}>
          <Ionicons name="ios-star-outline" size={20} color="gray" />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="ios-pencil-outline" size={20} color="gray" />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="ios-trash-bin-outline" size={20} color="gray" />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default WorkoutListItem;

const styles = StyleSheet.create({
  workoutContainer: {
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  information: {
    alignContent: "flex-start",
    flex: 1,
  },
  workoutTitle: {
    fontWeight: "600",
  },
  photoPlaceholder: {
    width: 90,
    height: 95,
    marginRight: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  buttonsContainer: {
    marginLeft: 20,
    justifyContent: "space-between",
  },
  iconButton: {
    flex: 1,
  },
});
