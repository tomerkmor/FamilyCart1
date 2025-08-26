import { StyleSheet, Text, View } from "react-native";
import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import { useEffect, useState } from "react";

function ProductForm({ productData, setProductData, validateData }) {
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  /*
  useEffect(() => {
    const invalid = Object.values(productData).some(
      (field) =>
        typeof field === "object" && field.required && field.isValid === false
    );
    setFormIsInvalid(invalid);
  }, [productData]);
*/
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
          title="רמת דחיפות"
          type="number"
          content={productData.category}
          field="emergency"
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
    flex: 4,
    alignItems: "stretch",
    padding: 24,
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
    justifyContent: "space-between",
    gap: 32,
    marginVertical: 20,
  },
  descriptionContainer: {},
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
  errorMessage: {
    color: "red",
    textAlign: "center",
    margin: 8,
  },
});
