import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "../App";

export default function ThemedScreen({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background, color: theme.text },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
