import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../App";

function ThemedText({ children, style }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[styles.container, { color: theme.text }, style]}>
      {children}
    </Text>
  );
}

export default ThemedText;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    textAlign: "right",
  },
});
