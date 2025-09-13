import { StyleSheet, Text, View } from "react-native";
import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function ProductForm({ productData, setProductData, validateData }) {
  const { theme } = useContext(ThemeContext);
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.accent }]}>
      <ThemedText style={[styles.title, { color: theme.headerTintColor }]}>
        המוצר שלך
      </ThemedText>

      <View style={styles.rowContainer}>
        <InputField
          title="כמות"
          type="number"
          content={productData.quantity}
          field="quantity"
          setData={setProductData}
        />
        <InputField
          title="שם הפריט"
          type="text"
          content={productData.product}
          field="product"
          setData={setProductData}
        />
      </View>

      <View style={styles.rowContainer}>
        <InputField
          title="קטגוריה"
          type="text"
          content={productData.category}
          field="category"
          setData={setProductData}
        />
        <InputField
          title="תאריך"
          type="date"
          content={productData.date}
          field="date"
          setData={setProductData}
        />
      </View>

      <View style={styles.rowContainer}>
        <InputField
          title="פירוט"
          type="textarea"
          content={productData.description}
          field="description"
          setData={setProductData}
        />
      </View>

      {formIsInvalid && (
        <Text style={styles.errorMessage}>
          Some data is missing - Please check your entered data!
        </Text>
      )}
    </View>
  );
}

export default ProductForm;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "stretch",
    marginHorizontal: 32,
    marginTop: 20,
    marginBottom: 10,
    padding: 22,
    paddingBottom: 40,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    marginBottom: 32,
  },
  productDetails: {},
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 24,
  },
  descriptionContainer: {},
});
