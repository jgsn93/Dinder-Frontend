import { StyleSheet, View } from "react-native";
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

export default function ChosenRestaurant({ restaurant }) {
  console.log(restaurant);

  return (
    <Box
      maxW="80"
      marginTop="0"
      rounded="lg"
      marginLeft="35"
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
            source={restaurant.image}
            size="2xl"
            alt="food image"
            width="100%"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3} alignItems="center">
        <Stack space={2}>
          <Heading marginTop="5" size="md" ml="-1">
            {restaurant.name}
          </Heading>
        </Stack>
        <Text fontWeight="400">🍴{restaurant.type}</Text>
        <Text fontWeight="400">
          {restaurant.addressLine1} {restaurant.postCode}
        </Text>
        <Text fontWeight="400"></Text>
      </Stack>
    </Box>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
