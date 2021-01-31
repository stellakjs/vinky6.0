import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./BottomNavigator";
import Info from "./Screens/Info"

export default class App extends React.Component {
  render() {
    return (
      <BottomNavigator/>

      // <Info/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
