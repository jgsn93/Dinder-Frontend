import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <TabNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
