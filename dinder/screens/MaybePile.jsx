import { ScrollView, StyleSheet, View } from "react-native";
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

export default function MaybePile({ maybePile }) {
  if (maybePile.length === 0) {
    return (
      <Box flex={1} bg="#FD3A73" alignItems="center" justifyContent="center">
        <Text>Your Maybe Pile is empty! Get matches from your Swipe List!</Text>
      </Box>
    );
  }

  return (
    <ScrollView bg="#FD3A73">
      <Box bg="#FD3A73" alignItems="center" marginTop="100">
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
                <Image
                  source={require("../images/choose.png")}
                  size="xs"
                  alt="select"
                ></Image>
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
  );
}

const styles = StyleSheet.create({});
