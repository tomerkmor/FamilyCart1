import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigation } from "@react-navigation/native";
import ThemedText from "./ThemedText";
import AddItemButton from "./CheckButton";

function Product({ productData }) {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const productPressHandler = () => {
    navigation.navigate("ManageProduct", productData);
  };
  return (
    <Pressable
      onPress={productPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        style={[styles.container, { backgroundColor: theme.headerBackground }]}
      >
        <View style={styles.leftContainer}>
          <ThemedText style={styles.username}>
            {productData.username}
          </ThemedText>
        </View>

        <View style={styles.centerContainer}>
          <ThemedText style={styles.product}>
            {productData.product.value} {"->"} {productData.quantity.value}
          </ThemedText>

          <ThemedText style={styles.date}>
            {productData.date.toLocaleDateString()}
          </ThemedText>
        </View>

        <View style={styles.rightContainer}>
          <AddItemButton />
        </View>
      </View>
    </Pressable>
  );
}

export default Product;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    flex: 11,
    flexDirection: "row",
    marginVertical: 14,
    borderRadius: 16,

    alignSelf: "center",
  },
  leftContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  username: {
    fontStyle: "italic",
    fontSize: 12,
  },
  centerContainer: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingVertical: 8,
  },
  rightContainer: {
    flex: 2,
  },
  productContainer: {
    flex: 1,
    flexDirection: "row",
  },
  quantity: {
    flex: 1,
  },
  product: {
    flex: 1,
    fontWeight: "bold",
  },
  date: {
    flex: 1,
    fontSize: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
