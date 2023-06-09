import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { FC, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import SlideModal from "../../../shared/components/SlideModal";
import colors from "../../../shared/variables/colors";
import FormBlock from "../../../shared/components/form/FormBlock";
import { useGetExercisesQuery } from "../../../redux/services/exercises";
import { weekdayDropdownList } from "../../../shared/variables/weekdayDropdownList";
import { useCreateWorkoutExerciseMutation } from "../../../redux/services/workoutExercises";
import LoadingButton from "../../../shared/components/form/LoadingButton";
import SubmitButton from "../../../shared/components/form/SubmitButton";

interface CreateWorkoutExerciseFormProps {
  isVisible: boolean;
  onClose: () => void;
  workoutId: string;
}

const CreateWorkoutExerciseForm: FC<CreateWorkoutExerciseFormProps> = ({
  isVisible,
  onClose,
  workoutId,
}) => {
  const { data: exercises } = useGetExercisesQuery();
  const [createWorkoutExercise, { isLoading }] =
    useCreateWorkoutExerciseMutation();

  const [exercise, setExercise] = useState("");
  const [weekday, setWeekday] = useState("0");
  const [setNumber, setSetNumber] = useState("");
  const [repsNumber, setRepsNumber] = useState("");
  const [weight, setWeight] = useState("");
  const [restTime, setRestTime] = useState("");

  const onSubmit = async () => {
    try {
      const workoutExercise = {
        reps: Number(repsNumber),
        sets: Number(setNumber),
        weight: Number(weight),
        restSeconds: Number(restTime),
        weekday: Number(weekday),
        exerciseId: exercise,
        workoutId,
      };
      await createWorkoutExercise(workoutExercise);
      cleanForm();
      onClose();
    } catch (error: any) {
      console.log(error);
    }
  };

  const cleanForm = () => {
    setExercise("");
    setWeekday("0");
    setSetNumber("");
    setRepsNumber("");
    setWeight("");
    setRestTime("");
  };

  if (!exercises)
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
      </>
    );

  return (
    <SlideModal
      isVisible={isVisible}
      onClose={onClose}
      headerText="Create Workout Exercise"
    >
      <ScrollView style={styles.modalForm}>
        <FormBlock
          icon={
            <MaterialCommunityIcons
              name="dumbbell"
              size={20}
              color={colors.lightPrimary}
            />
          }
          blockHeader="Choose exercise"
        >
          <Picker
            selectedValue={exercise}
            onValueChange={(itemValue) => {
              console.log(itemValue);
              setExercise(itemValue);
            }}
          >
            {exercises.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </FormBlock>
        <FormBlock
          icon={
            <MaterialCommunityIcons
              name="calendar"
              size={24}
              color={colors.lightPrimary}
            />
          }
          blockHeader="Select day of the week"
        >
          <Picker
            selectedValue={weekday}
            onValueChange={(itemValue) => setWeekday(itemValue)}
          >
            {weekdayDropdownList.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </FormBlock>
        <FormBlock
          icon={
            <Octicons name="number" size={24} color={colors.lightPrimary} />
          }
          blockHeader="Choose set number"
        >
          <TextInput
            placeholder="Number of sets"
            placeholderTextColor={colors.lightPrimary}
            style={styles.formInput}
            value={setNumber}
            onChangeText={(text) => setSetNumber(text)}
          />
        </FormBlock>
        <FormBlock
          icon={
            <MaterialCommunityIcons
              name="repeat"
              size={24}
              color={colors.lightPrimary}
            />
          }
          blockHeader="Choose repetition number"
        >
          <TextInput
            placeholder="Number of reps"
            placeholderTextColor={colors.lightPrimary}
            style={styles.formInput}
            value={repsNumber}
            onChangeText={(text) => setRepsNumber(text)}
          />
        </FormBlock>
        <FormBlock
          icon={
            <MaterialCommunityIcons
              name="weight-kilogram"
              size={24}
              color={colors.lightPrimary}
            />
          }
          blockHeader="Choose weight (kilograms)"
        >
          <TextInput
            placeholder="Weight (kilograms)"
            placeholderTextColor={colors.lightPrimary}
            style={styles.formInput}
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </FormBlock>
        <FormBlock
          icon={
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={24}
              color={colors.lightPrimary}
            />
          }
          blockHeader="Choose rest time (seconds)"
        >
          <TextInput
            placeholder="Rest time (seconds)"
            placeholderTextColor={colors.lightPrimary}
            style={styles.formInput}
            value={restTime}
            onChangeText={(text) => setRestTime(text)}
          />
        </FormBlock>
        {isLoading ? (
          <LoadingButton color="secondary" />
        ) : (
          <SubmitButton buttonText="Create" onPress={onSubmit} />
        )}
      </ScrollView>
    </SlideModal>
  );
};

export default CreateWorkoutExerciseForm;

const styles = StyleSheet.create({
  modalForm: {
    paddingHorizontal: 20,
  },
  formInput: {
    height: 50,
    paddingLeft: 20,
    backgroundColor: colors.lightAccent,
    color: colors.text,
    borderRadius: 30,
    fontWeight: "500",
  },
  viewContainer: {
    paddingHorizontal: 25,
  },
  spinnerContainer: {
    marginTop: "50%",
  },
});
