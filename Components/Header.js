import React, { useContext } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../App";
import { Picker } from "@react-native-picker/picker";
import ThemedText from "./ThemedText";
import { Themes } from "../constants/styles";

function Header() {
  const { theme, setTheme, themeName } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <ThemedText>Current theme:</ThemedText>

      <Picker
        selectedValue={themeName}
        style={[
          styles.picker,
          { backgroundColor: theme.headerBackground, color: theme.text },
        ]}
        onValueChange={(value) => setTheme(value)}
        dropdownIconColor="#000"
        mode="dropdown"
      >
        {Object.keys(Themes).map((key) => (
          <Picker.Item key={key} label={key} value={key} />
        ))}
      </Picker>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  picker: {
    width: 200,
    marginTop: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  text: { fontSize: 24, marginBottom: 20 },
});
