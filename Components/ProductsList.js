import { FlatList, StyleSheet, Text, View } from "react-native";
import Product from "./Product";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../store/products-context";
import { fetchProducts } from "../util/http";
import LoadingOverlay from "./UI/LoadingOverlay";
import ErrorOverlay from "./UI/ErrorOverlay";

function ProductsList() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const productsCtx = useContext(ProductsContext);

  useEffect(() => {
    async function getProducts() {
      setIsFetching(true);
      try {
        const products = await fetchProducts();
        productsCtx.setProducts(products);
      } catch (error) {
        setError("Could not fetch products!");
      }
      setIsFetching(false);
    }

    getProducts();
  }, []);

  function errorHandler() {
    setError(null);
  }

  let content = <Text style={styles.noDataText}>There's no data.</Text>;
  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  } else if (isFetching) {
    return <LoadingOverlay />;
  } else if (productsCtx.products.length > 0) {
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
