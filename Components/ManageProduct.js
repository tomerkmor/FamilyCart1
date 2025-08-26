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

const STARTING_PRODUCT = {
  // id - will be generated on submmition.
  product: { value: "", required: true, isValid: true },
  date: new Date(),
  username: "TEST",
  quantity: { value: "1", required: true, isValid: true },
  description: { value: "", required: false, isValid: true },
  category: { value: "", required: true, isValid: true },
  emergency: { value: "1", required: true, isValid: true },
};

function ManageProduct({ route, navigation }) {
  const { theme } = useContext(ThemeContext);
  //const editedProductId = route.params?.id;
  const [productData, setProductData] = useState(
    route.params ?? STARTING_PRODUCT
  );
  console.log(productData);
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

  const validateData = () => {
    const productNameIsValid =
      (productData.product.value || "").trim().length > 0;

    const quantityIsValid =
      !isNaN(productData.quantity.value) &&
      Number(productData.quantity.value) > 0;

    const emergencyIsValid =
      (productData.emergency.value || "").trim().length > 0;

    if (!(productNameIsValid && quantityIsValid && emergencyIsValid)) {
      //Alert.alert("Some data is empty.", "Please fill everything.");
      setProductData((currentInputs) => {
        console.log("ManageProduct: ", currentInputs);
        return {
          ...currentInputs,
          product: {
            ...currentInputs.product,
            isValid: productNameIsValid,
          },
          quantity: {
            ...currentInputs.quantity,
            isValid: quantityIsValid,
          },
          emergency: {
            ...currentInputs.emergency,
            isValid: emergencyIsValid,
          },
        };
      });
      return false;
    }
    return true;
  };

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.headerBackground }]}
    >
      <ProductForm
        isEditing={isEditing}
        productData={productData}
        setProductData={setProductData}
        validateData={validateData}
      />
      <ProductFormButtons
        isEditing={isEditing}
        productData={productData}
        setProductData={setProductData}
        validateData={validateData}
      />
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
