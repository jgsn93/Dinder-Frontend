import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

function ProfileCuisineDropdown() {
  const [selected, setSelected] = useState([]);

  const data = [
    { key: "1", value: "English" },
    { key: "2", value: "French" },
    { key: "3", value: "Chinese" },
    { key: "4", value: "Mexican" },
    { key: "5", value: "Caribbean" },
    { key: "6", value: "Italian" },
    { key: "7", value: "Indian" },
    { key: "8", value: "Grill" },
    { key: "9", value: "Fast Food" },
    { key: "10", value: "Bakery" },
    { key: "11", value: "Sushi" },
  ];

  return (
    <View>
      <MultipleSelectList
        boxStyles={{
          borderRadius: 20,
          margin: 12,
          backgroundColor: "white",
        }}
        dropdownStyles={{ backgroundColor: "white" }}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        placeholder="Choose your favourite foods"
        label="Selected foods"
      />
    </View>
  );
}

export default ProfileCuisineDropdown;
