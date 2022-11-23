import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwipeList from "./screens/SwipeList";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import MaybePile from "./screens/MaybePile";
import Registration from "./screens/Registration";
import { getHeaderTitle } from "@react-navigation/elements";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postcode, setPostcode] = useState("");
  const [maybePile, setMaybePile] = useState([]);
  

  const screenOptions = {
    tabBarActiveTintColor: "#FD3A73",
    tabBarInactiveTintColor: "white",
    tabBarLabelStyle: {
      fontSize: 15,
      margin: 0,
      padding: 0,
    },
    tabBarStyle: [
      {
        height: 120,
        backgroundColor: "#424242",
        display: "flex",
      },
      null,
    ],
    tabBarItemStyle: {
      margin: 5,
      borderRadius: 10,
    },
  };

  return (
    <Tab.Navigator {...{ screenOptions }}>
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
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Registration"
        children={() => (
          <Registration
            setEmail={setEmail}
            setPassword={setPassword}
            setPostcode={setPostcode}
          />
        )}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Swipe List"
        children={() => <SwipeList setMaybePile={setMaybePile}  />}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require("./images/6.png")}
              ></Image>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Maybe Pile"
        children={() => (
          <MaybePile maybePile={maybePile} setMaybePile={setMaybePile} />
        )}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.image}
                source={require("./images/5.png")}
              ></Image>
            );
          },
          headerShown: false,
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
          headerShown: false,
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
  headerStyle: {
    height: 80, // Specify the height of your custom header
  },
});
