import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ThemedText from "../ThemedText";

function IconButton({ icon, size, color, onPress, style, title }) {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={[styles.buttonContainer, style]}>
        <ThemedText style={styles.text}>{title}</ThemedText>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // align vertically the text to stand in the middle of the icon
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    gap: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {},
});
