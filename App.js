import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import RootNavigator from "./src/navigation/Route";

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}


