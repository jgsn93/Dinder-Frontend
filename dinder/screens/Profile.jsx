import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { patchUserByUsername } from "../api.mjs";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";
import ProfilePostcodeSelector from "../components/ProfilePostcodeSelector";

function Profile({
  username,
  setUsername,
  postcode,
  setPostcode,
  preferences,
  setPreferences,
  password,
}) {
  return (
    <View style={{ backgroundColor: "#FD3A73", height: 1000 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: "20%",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        {username}
      </Text>
      <ProfilePostcodeSelector postcode={postcode} setPostcode={setPostcode} />
      <ProfileCuisineDropdown
        username={username}
        setUsername={setUsername}
        password={password}
        preferences={preferences}
        postcode={postcode}
        setPreferences={setPreferences}
      />
    </View>
  );
}

export default Profile;
