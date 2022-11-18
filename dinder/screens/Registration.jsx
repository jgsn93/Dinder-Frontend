import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

function Registration({ setEmail, setPassword, setPostcode }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/DINDA.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(newEmail) => setEmail(newEmail)}
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Postcode"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(newPostcode) => setPostcode(newPostcode)}
          required="true"
        />
      </View>

      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => {
            navigation.navigate("Log In");
          }}
        >
          Already have an account? Click here to log in
        </Text>
      </TouchableOpacity>

      <Pressable
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text style={styles.loginText}>REGISTER</Text>
      </Pressable>
    </View>
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
    marginTop: 50,
    marginBottom: 25,
    width: 325,
    height: 200,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 10,
    marginBottom: 20,

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
    marginTop: 180,
    backgroundColor: "#FF1493",
  },
});

export default Registration;
