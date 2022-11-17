import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwipeList from "./screens/SwipeList";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import MaybePile from "./screens/MaybePile";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const screenOptions = {
    tabBarStyle: {
      height: 120,
      backgroundColor: "pink",
    },
    tabBarItemStyle: {
      margin: 5,
      borderRadius: 10,
    },
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
          margin: 0,
          padding: 0,
        },
      }}
      {...{ screenOptions }}
    >
      <Tab.Screen
        name="Log In"
        children={() => (
          <SignIn setEmail={setEmail} setPassword={setPassword} />
        )}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="Swipe List"
        component={SwipeList}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require("./images/6.png")}
              ></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Maybe Pile"
        component={MaybePile}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require("./images/5.png")}
              ></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        children={() => <Profile email={email} />}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require("./images/3.png")}
              ></Image>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    marginBottom: "10%",
    marginTop: "10%",
  },
});
