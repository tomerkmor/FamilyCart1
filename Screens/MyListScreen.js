import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../App";
import ThemedView from "../Components/ThemedView";
import { useContext } from "react";
import ThemedText from "../Components/ThemedText";

function MyListScreen() {
  const navigation = useNavigation();
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);

  return (
    <ThemedView>
      <ThemedText>MyListScreen</ThemedText>
    </ThemedView>
  );
}

export default MyListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
