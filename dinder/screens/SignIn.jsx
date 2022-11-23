import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { getUserByUsername } from "../api.mjs";

function SignIn({
  username,
  setUsername,
  password,
  setPassword,
  setPreferences,
  setPostcode,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    getUserByUsername(username).then((response) => {
      if (response.data[0].password === password) {
        alert("Login successful");
        setPreferences(response.data[0].preferences);
        setPostcode(response.data[0].postcode);
        navigation.navigate("Profile");
      } else {
        alert("Username and password does not match");
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Image
            style={styles.image}
            source={require("../images/chickenguy.png")}
          />

          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
              onChangeText={(newUsername) => setUsername(newUsername)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
          </View>

          <TouchableOpacity>
            <Text
              style={styles.forgot_button}
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              New User?
            </Text>
          </TouchableOpacity>

          <Pressable
            style={styles.loginBtn}
            onPress={() => {
              handlePress();
            }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </Pressable>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  image: {
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    height: "50%",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 10,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default SignIn;
