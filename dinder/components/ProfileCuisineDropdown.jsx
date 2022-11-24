import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import MultiSelect from "react-native-multiple-select";
import { getAllPreferences, patchUserByUsername } from "../api.mjs";
import { useNavigation } from "@react-navigation/native";

function ProfileCuisineDropdown({
  username,
  password,
  postcode,
  preferences,
  setPreferences,
}) {
  const [selectedItems, setSelectedItems] = useState(preferences);
  const [cuisineData, setCuisineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const handlePress = () => {
    patchUserByUsername(username, password, postcode, preferences).then(
      (res) => {
        alert("Changes successful");
        console.log(res);
      }
    );
  };

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
    setPreferences(selectedItems);
  };

  useEffect(() => {
    getAllPreferences().then((response) => {
      const cuisines = response.data.map((preference, index) => {
        return { id: index, name: preference.preference };
      });
      setCuisineData(cuisines);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <View style={styles.defaultBackground}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
        <Text style={styles.text}> Select foods </Text>

        <MultiSelect
          items={cuisineData}
          uniqueKey="name"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="black"
          tagBorderColor="black"
          tagTextColor="black"
          selectedItemTextColor="black"
          selectedItemIconColor="black"
          itemTextColor="black"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="black"
          submitButtonText="Submit"
        />
      </View>
      <View style={{ marginTop: 100 }}>
        <Button
          color="black"
          title="Update profile"
          onPress={() => handlePress()}
        ></Button>
        <Button
          color="black"
          title="Sign out"
          onPress={() => {
            navigation.navigate("Log In");
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: 10,
    border: "black",
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    height: 30,
    flex: 0.5,
    padding: 12,
    backgroundColor: "white",
  },

  text: {
    padding: 10,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  defaultBackground: {
    flex: 1,
    backgroundColor: "#FD3A73",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileCuisineDropdown;
