import { Pressable, View, StyleSheet } from "react-native";
import ThemedText from "../ThemedText";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Button({ title, onPress, mode, style }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        style={[
          styles.button,
          mode === "primary" && {
            backgroundColor: theme.headerBackground,
          },
        ]}
      >
        <ThemedText style={[mode === "primary" ? styles.primary : styles.flat]}>
          {title}
        </ThemedText>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    fontWeight: "bold",
    opacity: 0.9,
    minWidth: 120,
    marginHorizontal: 12,
    borderRadius: 8,
    marginVertical: 24,
  },
  flat: {
    backgroundColor: "transparent",
    fontSize: 18,
    textAlign: "center",
  },
  primary: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
  text: {},
});
