import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Product({ productData }) {
  const { theme } = useContext(ThemeContext);
  if (!productData) return <Text>There's no data.</Text>;

  console.log(productData);
  return (
    <Pressable>
      <View
        style={[styles.container, { backgroundColor: theme.headerBackground }]}
      >
        <View style={styles.username}>
          <ThemedText>{productData.username}</ThemedText>
        </View>

        <View style={styles.centerContainer}>
          <ThemedText style={styles.product}>
            {productData.product} - {productData.quantity}
          </ThemedText>

          <ThemedText style={styles.date}>
            {productData.date.toLocaleDateString()}
          </ThemedText>
        </View>

        <Button title="--V--" />
      </View>
    </Pressable>
  );
}

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "row",
    marginVertical: 14,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: "80%",
    alignSelf: "center",
  },
  username: {
    flex: 1,
    justifyContent: "center",
  },
  centerContainer: {
    flex: 1,
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
  },
  date: {
    flex: 1,
  },
});
