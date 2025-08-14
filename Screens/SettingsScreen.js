import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { useContext } from "react";
import { ThemeContext } from "../App";

import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";

function SettingsScreen() {
  const navigation = useNavigation();
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);

  return (
    <ThemedView>
      <Header />
      <ThemedText>SettingsScreen</ThemedText>
    </ThemedView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
