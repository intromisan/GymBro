import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import colors from "../../variables/colors";

interface LoadingButtonProps {
  color: "secondary" | "primary"
}

const LoadingButton: FC<LoadingButtonProps> = ({color}) => {
  return (
    <Pressable>
      <View style={[styles.button, {backgroundColor: color === "primary" ? colors.primary : colors.accent}]}>
        <ActivityIndicator animating={true} color={colors.white} size={24} />
      </View>
    </Pressable>
  );
};

export default LoadingButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});
