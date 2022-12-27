import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface FloatingActionButtonProps {
  onPress: () => void;
}

const FloatingActionButton: FC<FloatingActionButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name="ios-add" size={24} color="white" />
    </Pressable>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    width: 56,
    height: 56,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 25,
  },
});
