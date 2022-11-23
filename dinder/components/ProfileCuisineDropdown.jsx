import React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { getAllPreferences } from "../api.mjs";

function ProfileCuisineDropdown({ preferences, setPreferences }) {
  const [selected, setSelected] = useState([]);
  const [cuisineData, setCuisineData] = useState([]);

  useEffect(() => {
    getAllPreferences().then((response) => {
      const cuisines = response.data.map((preference, index) => {
        return { key: index, value: preference.preference };
      });
      setCuisineData(cuisines);
    });
  }, []);

  return (
    <View>
      <MultipleSelectList
        boxStyles={{
          borderRadius: 20,
          margin: 12,
          backgroundColor: "white",
        }}
        dropdownStyles={{ backgroundColor: "white" }}
        // setSelected={(val) => setSelected(val)}
        setSelected={(val) => {
          setPreferences(val);
        }}
        data={cuisineData}
        save="value"
        placeholder="Choose your favourite foods"
        label="Selected foods"
      />
    </View>
  );
}

export default ProfileCuisineDropdown;
