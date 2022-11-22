import { View, Text, Pressable, Button } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { Image } from "native-base";
import React from "react";
import ChosenRestaurant from "./ChosenRestaurant";

const ChooseRestaurant = ({ restaurantCard }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View display="flex" alignItems="center">
      <Pressable onPress={toggleModal}>
        <Image
          style={{ width: 100, height: 100, marginTop: -20, marginBottom: -50 }}
          source={require("../images/choose.png")}
          alt="Show modal"
        />
      </Pressable>
      <Modal isVisible={isModalVisible} backdropOpacity={0.75}>
        <View>
          <Image
            source={require("../images/isaMatch.png")}
            style={{ width: 500, height: 150 }}
            alt="It's a match"
          />
          <ChosenRestaurant restaurant={restaurantCard} />
          <Button title="Exit" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ChooseRestaurant;
