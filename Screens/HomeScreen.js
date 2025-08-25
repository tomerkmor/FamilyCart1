import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../App";

import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";
import AddItemButton from "../Components/UI/AddItemButton";
import ProductsList from "../Components/ProductsList";
import HomeHeader from "../Components/HomeHeader";

const DUMMY_DATA = [
  {
    id: 1,
    product: "Apple",
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: "5",
    description: "Fresh red apples",
    category: "Food",
    emergency: "1",
  },
  {
    id: 2,
    product: "T-Shirt",
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: "3",
    description: "Cotton T-shirts",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 3,
    product: "Banana",
    date: new Date("2025-08-16"),
    username: "John",
    quantity: "7",
    description: "Ripe bananas",
    category: "Food",
    emergency: "1",
  },
  {
    id: 4,
    product: "Jeans",
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: "2",
    description: "Blue denim jeans",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 5,
    product: "Bread",
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: "10",
    description: "Whole grain bread",
    category: "Food",
    emergency: "1",
  },
  {
    id: 6,
    product: "Jacket",
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: "1",
    description: "Winter jacket",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 7,
    product: "Orange",
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: "8",
    description: "Fresh oranges",
    category: "Food",
    emergency: "1",
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
