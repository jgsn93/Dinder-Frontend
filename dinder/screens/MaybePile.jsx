import { ScrollView, StyleSheet, View, StatusBar, Button } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChooseRestaurant from "../components/ChooseRestaurant";

export default function MaybePile({ maybePile, setMaybePile }) {
  if (maybePile.length === 0) {
    return (
      <Box flex={1} bg="#FD3A73" alignItems="center" justifyContent="center">
        <Text>Your Maybe Pile is empty! Get matches from your Swipe List!</Text>
      </Box>
    );
  }

  return (
    <View style={{ backgroundColor: "#FD3A73", height: "100%" }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          marginBottom: 25,
        }}
      >
        <ScrollView bg="#FD3A73">
          <Box bg="#FD3A73" alignItems="center">
            {maybePile.map((restaurantCard) => {
              return (
                <Box
                  key={restaurantCard.name}
                  maxW="80"
                  marginTop="25"
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "white",
                  }}
                >
                  <Box>
                    <AspectRatio w="100%" ratio={4 / 3}>
                      <Image
                        source={restaurantCard.image}
                        size="2xl"
                        alt="food image"
                        width="100%"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3} alignItems="center">
                    <Stack space={2}>
                      <Heading marginTop="5" size="md" ml="-1">
                        {restaurantCard.name}
                      </Heading>
                    </Stack>
                    <Text fontWeight="400">🍴{restaurantCard.type}</Text>
                    <ChooseRestaurant restaurantCard={restaurantCard} />
                    <HStack
                      alignItems="center"
                      space={4}
                      justifyContent="space-between"
                    ></HStack>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Image
            style={{ flex: 1 }}
            source={require("../images/button-imgs/reset.png")}
            alt="reset"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Image
            style={{ flex: 1 }}
            source={require("../images/button-imgs/random.png")}
            alt="random"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
  buttonContainer: {
    flex: 1,
    width: 50,
    height: 50,
  },
});
