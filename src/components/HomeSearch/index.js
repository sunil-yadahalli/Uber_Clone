import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };
  
  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <Feather name="clock" size={18} color="black" />
          <Text>Now</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="black" />
        </View>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Feather name="clock" size={20} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Night Club</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name="home" size={24} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Night Club</Text>
      </View>
    </View>
  );
}

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#434343",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#b3b3b3",
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 10,
  },
});
