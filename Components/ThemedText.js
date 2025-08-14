import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../App";

function ThemedText({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[styles.container, { color: theme.text }]}>{children}</Text>
  );
}

export default ThemedText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
