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
import LoadingOverlay from "./UI/LoadingOverlay";

function ProductFormButtons({
  isEditing,
  productData,
  setProductData,
  validateData,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const productsCtx = useContext(ProductsContext);

  async function confirmProductHandler() {
    if (!validateData()) return;

    setIsSubmitting(true);
    try {
      const productId = await storeProduct(productData);
      productsCtx.addProduct({ ...productData, id: productId });
    } catch (error) {
      setError("Could not save data - please try again later.");
      setIsSubmitting(false);
    }
    navigation.goBack();
  }

  const cancelProductHandler = () => {
    navigation.goBack();
  };

  async function updateProductHandler() {
    if (!validateData()) return;

    setIsSubmitting(true);
    try {
      await updateProduct(productData);
      productsCtx.updateProduct(productData);
    } catch (error) {
      setError("Could not update product - please try again later.");
      setIsSubmitting(false);
    }
    navigation.goBack();
  }

  async function deleteProductHandler() {
    setIsSubmitting(true);
    try {
      await deleteProduct(productData.id);
      productsCtx.deleteProduct(productData);
    } catch (error) {
      setError("Could not delete product - please try again later.");
      setIsSubmitting(false);
    }
    navigation.goBack();
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

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
            color={theme.error}
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
