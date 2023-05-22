import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import WorkoutListItem from "./components/WorkoutListItem";
import FloatingActionButton from "../../shared/components/FloatingActionButton";
import { useGetWorkoutsQuery } from "../../redux/services/workouts";
import colors from "../../shared/variables/colors";
import CreateWorkoutForm from "./components/CreateWorkoutForm";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Workouts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <FloatingActionButton onPress={() => setIsModalVisible(true)} />
      </>
    );

  if (!workoutList)
    return (
      <View>
        <Text>Could not retrieve the workout list</Text>
      </View>
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
        {workoutList.length === 0 ? (
          <Text style={styles.subtitle}>You don't have workouts yet</Text>
        ) : (
          <>
            <Text style={styles.subtitle}>{workoutList?.length} Workouts</Text>
            {workoutList.map((workout) => (
              <WorkoutListItem key={workout.id} {...workout} />
            ))}
          </>
        )}

        <CreateWorkoutForm
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </ScrollView>

      <FloatingActionButton onPress={() => setIsModalVisible(true)} />
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
