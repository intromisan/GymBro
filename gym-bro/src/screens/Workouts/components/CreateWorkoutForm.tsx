import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { FC, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SlideModal from "../../../shared/components/SlideModal";
import FormBlock from "../../../shared/components/form/FormBlock";
import colors from "../../../shared/variables/colors";
import { useCreateWorkoutMutation } from "../../../redux/services/workouts";
import LoadingButton from "../../../shared/components/form/LoadingButton";

interface CreateWorkoutFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateWorkoutForm: FC<CreateWorkoutFormProps> = ({
  isVisible,
  onClose,
}) => {
  const [workoutName, setWorkoutName] = useState("");

  const [createWorkout, { isLoading }] = useCreateWorkoutMutation();

  const onSubmit = async () => {
    try {
      const workout = { name: workoutName };
      await createWorkout(workout);

      onClose();
      setWorkoutName("");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <SlideModal
      isVisible={isVisible}
      onClose={onClose}
      headerText="Create Workout"
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
          blockHeader="Edit name"
        >
          <TextInput
            placeholder="My workout"
            placeholderTextColor={colors.lightPrimary}
            style={styles.formInput}
            value={workoutName}
            onChangeText={(text) => setWorkoutName(text)}
          />
        </FormBlock>
        {isLoading ? (
          <LoadingButton color="secondary" />
        ) : (
          <Pressable style={styles.submitButtonContainer} onPress={onSubmit}>
            <Text style={styles.submitButtonText}>Create</Text>
          </Pressable>
        )}
      </ScrollView>
    </SlideModal>
  );
};

export default CreateWorkoutForm;

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
  submitButtonContainer: {
    width: "80%",
    backgroundColor: colors.primary,
    alignSelf: "center",
    marginVertical: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
  },
});
