import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";

function DestinationSearch() {
  const navigation = useNavigation();
  const goToResults = () => {
    navigation.navigate("SearchResults");
  };
  const [fromText, setfromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const API_KEY = "AIzaSyAvpGLJepCNt_FcrabSEgmpc2DliezC-cU";

  return (
    <View style={styles.container}>
      <TextInput
        value={fromText}
        onChangeText={setfromText}
        style={styles.textInput}
        placeholder="From"
      />
      <TextInput
        value={destinationText}
        onChangeText={setDestinationText}
        style={styles.textInput}
        placeholder="Where to?"
      />

      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true2
          console.log(data, details);
        }}
        fetchDetails
        query={{
          key: API_KEY,
          language: "en",
        }}
      />
      <Pressable onPress={goToResults} style={styles.button}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
}

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor: "#eee",
    height: Dimensions.get("window").height,
  },
  textInput: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#eee",
  },
  button: {
    // width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#767676",
  },
});
