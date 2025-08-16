import { FlatList, StyleSheet, Text, View } from "react-native";
import Product from "./Product";

function ProductsList({ productsList }) {
  return (
    <FlatList
      data={productsList}
      renderItem={({ item }) => <Product productData={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 8,
  },
});
