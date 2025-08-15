import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../App";
import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";
import AddItemButton from "../UI/AddItemButton";
import ProductsList from "../Components/ProductsList";

function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <ThemedView>
      <ThemedText>
        <View>
          <ProductsList />
          <AddItemButton />
        </View>
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
