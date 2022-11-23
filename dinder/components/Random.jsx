import { View, Pressable, Button } from 'react-native'
import Modal from "react-native-modal";
import { Image } from "native-base";
import React, {useState} from 'react'
import ChosenRestaurant from "./ChosenRestaurant";


const Random = ({ restaurantCard, setRandom, maybePile }) => {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const callTo = (() => {
        toggleModal()
        setRandom(maybePile[Math.floor(Math.random()*maybePile.length)])
    }) 
    return (
      <View display="flex" alignItems="center">
        <Pressable onPress={callTo}>
          <Image
            style={{ flex: 1, width: 150, height: 150, marginTop: -20, marginBottom: -50 }}
            source={require("../images/button-imgs/random.png")}
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
  
  


export default Random