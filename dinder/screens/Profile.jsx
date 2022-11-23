import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { patchUserByUsername } from "../api.mjs";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";
import ProfilePostcodeSelector from "../components/ProfilePostcodeSelector";

function Profile({
  username,
  postcode,
  setPostcode,
  preferences,
  setPreferences,
  password,
}) {
  const handlePress = () => {
    patchUserByUsername(username, password, postcode, preferences).then(
      (res) => {
        alert("Changes successful");
        console.log(res);
      }
    );
  };

  return (
    <View style={{ backgroundColor: "#FD3A73", height: 1000 }}>
      <Text
        style={{ textAlign: "center", marginTop: "20%", fontWeight: "bold" }}
      >
        {username}
      </Text>
      <ProfilePostcodeSelector postcode={postcode} setPostcode={setPostcode} />
      <ProfileCuisineDropdown
        preferences={preferences}
        setPreferences={setPreferences}
      />
      <Button title="Update profile" onPress={() => handlePress()}></Button>
    </View>
  );
}

export default Profile;
