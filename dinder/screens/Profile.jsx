import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";
import ProfilePostcodeSelector from "../components/ProfilePostcodeSelector";

function Profile({ email }) {
  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: "5%" }}>{email}</Text>
      <ProfilePostcodeSelector />
      <ProfileCuisineDropdown />
    </View>
  );
}

export default Profile;
