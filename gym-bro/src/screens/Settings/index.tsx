import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../shared/variables/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../shared/hooks";
import { onSignOut } from "../../redux/slices/userSlice";

const Settings = () => {
  const dispatch = useAppDispatch();

  const signOutHandler = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    dispatch(onSignOut());
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={signOutHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
});
