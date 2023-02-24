import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

import colors from "../../shared/variables/colors";
import { Link } from "@react-navigation/native";
import { useCreateUserMutation } from "../../redux/services/userApi";
import { useAppDispatch } from "../../shared/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onSignIn } from "../../redux/slices/userSlice";

const SignupScreen = () => {
  const [email, setEmailInput] = useState("");
  const [name, setNameInput] = useState("");
  const [password, setPasswordInput] = useState("");

  const [signUp, { isLoading }] = useCreateUserMutation();
  const dispatch = useAppDispatch();

  const submitHandler = async () => {
    try {
      const session = await signUp({ email, name, password }).unwrap();

      await AsyncStorage.setItem("accessToken", session.token);
      dispatch(onSignIn(session.token));
    } catch (error: any) {
      Platform.OS === "android"
        ? ToastAndroid.show(error.data, ToastAndroid.SHORT)
        : console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.loginScreen}>
          <View style={style.loginContainer}>
            <View>
              <Text style={style.loginTitle}>Register</Text>
              <Text style={style.loginSubtitle}>
                to get your GymBro account
              </Text>
            </View>
            <View style={style.inputView}>
              <View style={style.inputWrap}>
                <Feather
                  name="mail"
                  size={18}
                  color={colors.primary}
                  style={style.inputIcon}
                />
                <TextInput
                  style={style.input}
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmailInput}
                  placeholder="E-mail"
                  autoCapitalize="none"
                />
              </View>
              <View style={style.inputWrap}>
                <Feather
                  name="user"
                  size={18}
                  color={colors.primary}
                  style={style.inputIcon}
                />
                <TextInput
                  style={style.input}
                  value={name}
                  onChangeText={setNameInput}
                  placeholder="Name"
                  autoCapitalize="none"
                />
              </View>
              <View style={style.inputWrap}>
                <Feather
                  name="lock"
                  size={18}
                  color={colors.primary}
                  style={style.inputIcon}
                />
                <TextInput
                  style={style.input}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={setPasswordInput}
                  placeholder="Password"
                  autoCapitalize="none"
                />
              </View>
            </View>
            <Text style={style.noAccount}>
              Already have an account?{" "}
              <Link to={{ screen: "SignIn" }} style={style.linkText}>
                Sign in
              </Link>
            </Text>
            {isLoading ? (
              <Pressable>
                <View style={style.button}>
                  <ActivityIndicator
                    animating={true}
                    color={colors.white}
                    size={24}
                  />
                </View>
              </Pressable>
            ) : (
              <Pressable onPress={submitHandler}>
                <View style={style.button}>
                  <Text style={style.buttonText}>Sign Up</Text>
                </View>
              </Pressable>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
const style = StyleSheet.create({
  loginScreen: {
    backgroundColor: colors.accent,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  loginTitle: {
    fontSize: 65,
    textAlign: "center",
    color: colors.primary,
  },
  loginSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
    color: colors.lightPrimary,
  },
  inputView: {
    marginTop: 30,
  },
  inputWrap: {
    position: "relative",
  },
  input: {
    minWidth: "85%",
    paddingLeft: 50,
    paddingRight: 20,
    paddingVertical: 15,
    backgroundColor: colors.lightAccent,
    color: colors.text,
    borderRadius: 30,
    fontSize: 16,
    marginBottom: 10,
  },
  inputIcon: {
    position: "absolute",
    zIndex: 2,
    top: 20,
    left: 20,
  },
  noAccount: {
    color: colors.text,
    marginTop: 5,
    marginBottom: 5,
  },
  linkText: {
    color: colors.primary,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: colors.primary,
    minWidth: "85%",
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
