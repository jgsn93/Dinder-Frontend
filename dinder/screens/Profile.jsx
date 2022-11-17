import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";
import ProfilePostcodeSelector from "../components/ProfilePostcodeSelector";

function Profile({ email }) {
  return (
    <View>
      <ProfilePostcodeSelector />
      <ProfileCuisineDropdown />
    </View>
  );
}

export default Profile;
