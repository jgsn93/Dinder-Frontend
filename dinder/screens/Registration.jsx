import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import { registerNewUser, getUserByUsername, getUsers } from "../api.mjs";
function Registration() {
  const navigation = useNavigation();
  const [user, setNewUser] = useState({
    username: undefined,
    password: undefined,
    postcode: undefined,
  });
  const [usersDatabase, setUsersDatabase] = useState([]);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    getUsers().then(({ data }) => {
      const usernames = data.map((user) => {
        return user.username;
      });
      setUsersDatabase(usernames);
    });
  }, [successful]);

  const handlePress = () => {
    if (usersDatabase.includes(user.username)) {
      alert("Username already in use - please try again");
    } else {
      registerNewUser(user)
        .then((res) => {
          console.log(res, "<-- res");
          if (res.status === 201) {
            alert("Registration successful");
            setSuccessful((currSuccessful) => {
              setSuccessful(!currSuccessful);
            });
            navigation.navigate("Log In");
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Registration failed - all fields required");
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/DINDA.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(newUsername) =>
            setNewUser((current) => {
              const newUser = { ...current };
              newUser.username = newUsername;
              setNewUser(newUser);
            })
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(newPassword) =>
            setNewUser((current) => {
              const newUser = { ...current };
              newUser.password = newPassword;
              // console.log(newUser)
              setNewUser(newUser);
            })
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Postcode"
          placeholderTextColor="#003f5c"
          onChangeText={(newPostcode) =>
            setNewUser((current) => {
              const newUser = { ...current };
              newUser.postcode = newPostcode;

              setNewUser(newUser);
            })
          }
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
          handlePress();
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
