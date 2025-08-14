import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import ThemedScreen from "../Components/ThemedView";

import ThemedView from "../Components/ThemedView";
import { ThemeContext } from "../App";
import { useContext } from "react";
import ThemedText from "../Components/ThemedText";

function RecipesScreen() {
  const navigation = useNavigation();
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);

  return (
    <ThemedView>
      <ThemedText>RecipesScreen</ThemedText>
    </ThemedView>
  );
}

export default RecipesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
