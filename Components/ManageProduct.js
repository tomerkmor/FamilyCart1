import { StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeContext } from "../App";

import Button from "./UI/Button";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import InputField from "./UI/InputField";
import IconButton from "./UI/IconButton";
import ProductForm from "./ProductForm";
import ProductFormButtons from "./ProductFormButtons";
function ManageProduct({ route, navigation }) {
  const { theme } = useContext(ThemeContext);
  //const editedProductId = route.params?.id;
  const [productData, setProductData] = useState(route.params ?? {});
  const isEditing = !!productData?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "עריכת מוצר" : "הוספת פריט חדש",
      //headerStyle: { backgroundColor: theme.headerBackground },
      headerStyle: {
        backgroundColor: theme.headerBackground,
      },
      headerTintColor: theme.headerTintColor,
      tabBarStyle: { backgroundColor: theme.tabBarBackground },
      tabBarActiveTintColor: theme.tabBarActiveTintColor,
      tabBarInactiveTintColor: theme.text,
      headerTitleAlign: "center",
      contentStyle: { backgroundColor: theme.background },
    });
  }, [navigation, isEditing]);

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.headerBackground }]}
    >
      <ProductForm
        isEditing={isEditing}
        productData={productData}
        setProductData={setProductData}
      />
      <ProductFormButtons isEditing={isEditing} productData={productData} />
    </ThemedView>
  );
}

export default ManageProduct;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "red",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
