import { Alert, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import Button from "./UI/Button";
import IconButton from "./UI/IconButton";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { ProductsContext } from "../store/products-context";

function ProductFormButtons({ isEditing, productData }) {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const productsCtx = useContext(ProductsContext);
  //const [productData, setProductData] = useState({});

  const validateData = () => {
    const productNameIsValid = (productData.product || "").trim().length > 0;
    const quantityIsValid =
      !isNaN(productData.quantity) && Number(productData.quantity) > 0;
    const emergencyIsValid = (productData.emergency || "").trim().length > 0;

    if (!(productNameIsValid && quantityIsValid && emergencyIsValid)) {
      Alert.alert("Some data is empty.", "Please fill everything.");
      return 0;
    }
    return 1;
  };
  const confirmProductHandler = () => {
    if (!validateData()) return;

    productsCtx.addProduct(productData);
    navigation.goBack();
  };

  const cancelProductHandler = () => {
    navigation.goBack();
  };

  const updateProductHandler = () => {
    if (!validateData()) return;

    productsCtx.updateProduct(productData);
    navigation.goBack();
  };

  const deleteProductHandler = () => {
    productsCtx.deleteProduct(productData);
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
