import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import { Text, View, StyleSheet } from "react-native";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const Help = () => {
  return (
    <View style={styles.dummy}>
      <Text style={styles.text}>Help</Text>
    </View>
  );
};

const NextTrip = () => {
  return (
    <View style={styles.dummy}>
      <Text style={styles.text}>NextTrip</Text>
    </View>
  );
};

function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => (
          <CustomDrawer {...props}/>
      )}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Next Trip" component={NextTrip} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

const styles = StyleSheet.create({
  dummy: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
