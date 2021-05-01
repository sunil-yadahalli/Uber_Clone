import React from "react";
import { Dimensions, View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

function HomeScreen() {
  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <HomeMap />
      </View>

      <CovidMessage />
      <HomeSearch />
    </View>
  );
}

export default HomeScreen;
