import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileCuisineDropdown from "../components/ProfileCuisineDropdown";

function Profile({ email }) {
  return (
    <View>
      <ProfileCuisineDropdown />
    </View>
  );
}

export default Profile;
