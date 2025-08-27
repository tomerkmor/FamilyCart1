import { FlatList, StyleSheet, Text, View } from "react-native";
import Product from "./Product";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../store/products-context";
import { fetchProducts } from "../util/http";

function ProductsList() {
  const productsCtx = useContext(ProductsContext);

  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      productsCtx.setProducts(products);
    }

    getProducts();
  }, []);

  let content = <Text style={styles.noDataText}>There's no data.</Text>;
  if (productsCtx.products.length > 0) {
    content = (
      <FlatList
        data={productsCtx.products}
        renderItem={({ item }) => <Product productData={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return content;
}

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 8,
  },
  noDataText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
