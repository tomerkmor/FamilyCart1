import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import ThemedScreen from "../Components/ThemedView";
import { useContext } from "react";
import { ThemeContext } from "../App";

function ManageExpense() {
  const navigation = useNavigation();
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);

  return (
    <ThemedScreen>
      <Text>ManageExpense</Text>
    </ThemedScreen>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
