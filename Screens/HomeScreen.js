import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../App";
import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";
import AddItemButton from "../UI/AddItemButton";

function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <ThemedView>
      <ThemedText>
        <Text>dsa</Text>
        <Text>dsa</Text>
        <Text>dsa</Text>

        <AddItemButton />
      </ThemedText>
    </ThemedView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
