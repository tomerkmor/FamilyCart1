import { Alert, Button, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../App";

function CheckButton() {
  const { theme } = useContext(ThemeContext);
  const handleCompletion = () => {
    Alert.alert("Item bought!", "deleteing it from the list...", [
      { text: "Cancel", style: "cancel" },
      {
        text: "OK",
        onPress: () => console.log("Item deleted"),
      },
    ]);
  };

  return (
    <Pressable
      onPress={handleCompletion}
      style={{
        flex: 1,
        backgroundColor: theme.tabBarActiveTintColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="checkmark-outline" color="white" size={40} />
    </Pressable>
  );
}

export default CheckButton;
