import { View, Pressable, Button } from "react-native";
import Modal from "react-native-modal";
import { Image } from "native-base";
import React, { useState } from "react";
const Reset = ({ setMaybePile }) => {
  return (
    <View display="flex" alignItems="center">
      <Pressable
        onPress={() => {
          setMaybePile([]);
        }}
      >
        <Image
          style={{ flex: 1, width: 150, height: 150 }}
          source={require("../images/button-imgs/reset.png")}
          alt="Show modal"
        />
      </Pressable>
    </View>
  );
};

export default Reset;
