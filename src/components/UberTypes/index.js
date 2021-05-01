import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function UberTypes() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/UberX.jpeg")}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          UberX <Ionicons name="person" size={16} color="black" />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="green" />
        <Text style={styles.price}>est .27$</Text>
      </View>
    </View>
  );
}

export default UberTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
});
