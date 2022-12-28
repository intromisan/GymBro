import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

import colors from "../../shared/variables/colors";
import { Link } from "@react-navigation/native";

const SignupScreen = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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
                  value={emailInput}
                  onChangeText={setEmailInput}
                  placeholder="E-mail"
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
                  value={nameInput}
                  onChangeText={setNameInput}
                  placeholder="Name"
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
                  value={passwordInput}
                  secureTextEntry={true}
                  onChangeText={setPasswordInput}
                  placeholder="Password"
                />
              </View>
            </View>
            <Text style={style.noAccount}>
              Already have one?{" "}
              <Link to={{ screen: "SignIn" }} style={style.linkText}>
                Sign in
              </Link>
            </Text>
            <Pressable
              onPress={() =>
                console.log({
                  email: emailInput,
                  name: nameInput,
                  password: passwordInput,
                })
              }
            >
              <View style={style.button}>
                <Text style={style.buttonText}>Sign Up</Text>
              </View>
            </Pressable>
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
