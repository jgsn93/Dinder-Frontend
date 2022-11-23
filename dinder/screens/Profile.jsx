import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";
import ProfilePostcodeSelector from "../components/ProfilePostcodeSelector";

function Profile({ username }) {
  return (
    <View style={{ backgroundColor: "#FD3A73", height: 1000 }}>
      <Text
        style={{ textAlign: "center", marginTop: "20%", fontWeight: "bold" }}
      >
        {username}
      </Text>
      <ProfilePostcodeSelector />
      <ProfileCuisineDropdown />
      <Button title="Update profile"></Button>
    </View>
  );
}

export default Profile;
