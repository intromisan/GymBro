import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import colors from "../../variables/colors";

interface SubmitButtonProps {
  onPress: () => void;
  buttonText: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ onPress, buttonText }) => {
  return (
    <Pressable style={styles.submitButtonContainer} onPress={onPress}>
      <Text style={styles.submitButtonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
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
