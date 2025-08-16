import React, { useContext } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../App";
import ThemedText from "./ThemedText";

function Header() {
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <ThemedText>Current theme: {themeName}</ThemedText>
      <Switch
        value={themeName === "dark"}
        onValueChange={toggleTheme}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={themeName === "dark" ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  text: { fontSize: 24, marginBottom: 20 },
});
