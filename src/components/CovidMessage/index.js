import React from "react";
import { Text, View, StyleSheet } from "react-native";

function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Expo web is in late beta, please report any bugs or missing features on
        the Expo repo. You can follow the V1 release for more...
      </Text>
      <Text style={styles.learnMore}>Learn More!!</Text>
    </View>
  );
}

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#1065e9",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#bed9ff",
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: "white",
    fontSize: 15,
    marginBottom: 10,
  },
});
