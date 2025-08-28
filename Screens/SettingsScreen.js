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
      <ThemedText>SettingsScreen</ThemedText>
      <Header />
      <ThemedText>hello Username</ThemedText>
      <ThemedText>Change Nickname</ThemedText>
      <ThemedText>
        Family Button(add screen for managing the family...)
      </ThemedText>
      <ThemedText>Notifications</ThemedText>
      <ThemedText>Log-out Button</ThemedText>
    </ThemedView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
