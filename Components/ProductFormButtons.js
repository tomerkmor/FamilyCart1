import { Alert, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  deleteProduct,
  storeProduct,
  updateProduct,
  updateProducts,
} from "../util/http";

import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import Button from "./UI/Button";
import IconButton from "./UI/IconButton";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { ProductsContext } from "../store/products-context";

function ProductFormButtons({
  isEditing,
  productData,
  setProductData,
  validateData,
}) {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const productsCtx = useContext(ProductsContext);

  async function confirmProductHandler() {
    if (!validateData()) return;
    console.log("from ProductFormButtons - confirmProductHandler");

    const productId = await storeProduct(productData);
    console.log("successfully created item on the database!", productData); // DOES NOT REACH
    productsCtx.addProduct({ ...productData, id: productId });
    navigation.goBack();
  }

  const cancelProductHandler = () => {
    navigation.goBack();
  };

  async function updateProductHandler() {
    if (!validateData()) return;

    productsCtx.updateProduct(productData);
    await updateProduct(productData);
    navigation.goBack();
  }

  const deleteProductHandler = () => {
    productsCtx.deleteProduct(productData);
    deleteProduct(productData.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          title={isEditing ? "עדכון" : "הוספה"}
          onPress={isEditing ? updateProductHandler : confirmProductHandler}
          style={styles.button}
          mode="primary"
        />
        <Button
          title="ביטול"
          onPress={cancelProductHandler}
          style={styles.button}
          mode="flat"
        />
      </View>
      <View
        style={[
          styles.deleteContainer,
          { borderColor: theme.headerBackground },
        ]}
      >
        {isEditing && (
          <IconButton
            icon="trash"
            color="red"
            title="מחק"
            onPress={deleteProductHandler}
            size={36}
          />
        )}
      </View>
    </View>
  );
}

export default ProductFormButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    width: "100%",
  },
  productDetails: {},
  rowContainer: {},
  descriptionContainer: {},
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    borderTopWidth: 4,
  },
});
