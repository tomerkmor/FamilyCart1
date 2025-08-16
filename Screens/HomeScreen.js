import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../App";

import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";
import AddItemButton from "../UI/AddItemButton";
import ProductsList from "../Components/ProductsList";
import HomeHeader from "../Components/HomeHeader";

const DUMMY_DATA = [
  {
    id: 1,
    product: "Product 1",
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: "5",
    description: "description 1...",
    category: "Food",
  },
  {
    id: 2,
    product: "Product 2",
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: "3",
    description: "description 2...",
    category: "Clothes",
  },
  {
    id: 3,
    product: "Product 3",
    date: new Date("2025-08-16"),
    username: "John",
    quantity: "7",
    description: "description 3...",
    category: "Food",
  },
  {
    id: 4,
    product: "Product 4",
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: "2",
    description: "description 4...",
    category: "Clothes",
  },
  {
    id: 5,
    product: "Product 5",
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: "10",
    description: "description 5...",
    category: "Food",
  },
  {
    id: 6,
    product: "Product 6",
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: "1",
    description: "description 6...",
    category: "Clothes",
  },
  {
    id: 7,
    product: "Product 7",
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: "8",
    description: "description 7...",
    category: "Food",
  },
];

function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <ThemedView>
      <View style={styles.container}>
        <HomeHeader />
        <ProductsList productsList={DUMMY_DATA} />
        <AddItemButton />
      </View>
    </ThemedView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 50,
    verticalAlign: "center",
    justifyContent: "center",
  },
});
