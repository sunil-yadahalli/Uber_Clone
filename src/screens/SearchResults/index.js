import React from "react";
import { View, Pressable, Text } from "react-native";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

function SearchResults() {
  return (
    <View>
      <RouteMap />
      <UberTypes />
      <UberTypes />
      <UberTypes />
      <Pressable
        style={{
          backgroundColor: "black",
          padding: 10,
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
}

export default SearchResults;
