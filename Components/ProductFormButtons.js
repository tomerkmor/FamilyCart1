import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import InputField from "./UI/InputField";
import ThemedText from "./ThemedText";
import Button from "./UI/Button";
import IconButton from "./UI/IconButton";
import { useContext } from "react";
import { ThemeContext } from "../App";

function ProductFormButtons({ isEditing, route }) {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const [productData, setProductData] = useState({});

  const confirmProductHandler = () => {
    navigation.navigate("HomePage");
  };
  const cancelProductHandler = () => {
    navigation.navigate("HomePage");
  };
  const updateProductHandler = () => {
    navigation.navigate("HomePage");
  };
  const deleteProductHandler = () => {
    navigation.navigate("HomePage");
  };

  function clearProductData() {}
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

    borderTopWidth: 4,
  },
});
