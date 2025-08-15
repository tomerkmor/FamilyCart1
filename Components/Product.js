import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Product({ productData }) {
  const { theme } = useContext(ThemeContext);
  if (!productData) return null;
  return (
    <View style={[{ backgroundColor: theme.headerBackground }]}>
      <Ionicons name="bookmarks-outline" color={"green"} size={18} />
      <View style={styles.username}>
        <ThemedText>{productData.username}1</ThemedText>
      </View>
      <View style={styles.productContainer}>
        <View>
          <ThemedText style={styles.quantity}>
            {productData.quantity}1
          </ThemedText>
          <ThemedText style={styles.product}>{productData.product}1</ThemedText>
        </View>
        <ThemedText style={styles.date}>
          {productData.date.toLocaleDateString()}1
        </ThemedText>
      </View>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    marginVertical: 4,
  },
  username: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
