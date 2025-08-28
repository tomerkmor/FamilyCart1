import { StyleSheet, Text, View } from "react-native";
import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import { useEffect, useState } from "react";

function ProductForm({ productData, setProductData, validateData }) {
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>המוצר שלך</ThemedText>

      <View style={styles.rowContainer}>
        <InputField
          title="כמות"
          type="number"
          content={productData.quantity}
          field="quantity"
          setProductData={setProductData}
        />
        <InputField
          title="שם הפריט"
          type="text"
          content={productData.product}
          field="product"
          setProductData={setProductData}
        />
      </View>

      <View style={styles.rowContainer}>
        <InputField
          title="קטגוריה"
          type="text"
          content={productData.category}
          field="category"
          setProductData={setProductData}
        />
        <InputField
          title="תאריך"
          type="date"
          content={productData.date}
          field="date"
          setProductData={setProductData}
        />
      </View>

      <InputField
        title="פירוט"
        type="textarea"
        content={productData.description}
        field="description"
        setProductData={setProductData}
      />

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
    flex: 1,
    alignItems: "stretch",
    marginHorizontal: 32,
    marginTop: 20,
    marginBottom: 40,
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
