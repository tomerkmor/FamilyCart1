import { StyleSheet, View } from "react-native";
import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";

function ProductForm({ productData }) {
  //console.log(productData);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>המוצר שלך</ThemedText>

      <View style={styles.rowContainer}>
        <InputField title="כמות" type="text" content={productData.quantity} />
        <InputField
          title="שם הפריט"
          type="text"
          content={productData.product}
        />
      </View>

      <View style={styles.rowContainer}>
        <InputField
          title="רמת דחיפות"
          type="text"
          content={productData.emergency}
        />
        <InputField title="תאריך" type="date" content={productData.date} />
      </View>

      <InputField
        title="פירוט"
        type="textarea"
        content={productData.description}
      />
    </View>
  );
}

export default ProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
