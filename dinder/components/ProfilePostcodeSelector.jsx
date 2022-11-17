import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";

export default function ProfilePostcodeSelector() {
  const [postcode, setPostcode] = useState("");

  console.log(postcode);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(newPostcode) => setPostcode(newPostcode)}
        value={postcode}
        placeholder="Set your postcode"
      ></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
