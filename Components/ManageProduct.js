import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeContext } from "../App";

import ThemedView from "./ThemedView";
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

    const categoryIsValid =
      (productData.category.value || "").trim().length > 0;

    if (!(productNameIsValid && quantityIsValid && categoryIsValid)) {
      Alert.alert("Some data is empty.", "Please fill everything.");
      console.log();
      console.log(productNameIsValid, quantityIsValid, categoryIsValid);
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
          category: {
            ...currentInputs.emergency,
            isValid: categoryIsValid,
          },
        };
      });
      return false;
    }
    return true;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <ThemedView
            style={[
              styles.container,
              { backgroundColor: theme.headerBackground },
            ]}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default ManageProduct;

const styles = StyleSheet.create({
  flex: { flex: 1 },
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
