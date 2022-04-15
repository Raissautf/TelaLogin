import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LoginScreen from "./src/LoginScreen";

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}
