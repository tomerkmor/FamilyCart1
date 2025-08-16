import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ThemedText from "./ThemedText";
import { useContext } from "react";
import { ThemeContext } from "../App";

function HomeHeader() {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.headerBackground }]}
    >
      <ThemedText>Filters</ThemedText>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filter}>
          <ThemedText>Filter 1</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <ThemedText>Filter 2</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <ThemedText>Filter 3</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 24,
    minWidth: "50%",
    maxWidth: 800,
    alignSelf: "center",
    alignItems: "center", // ✅ centers children horizontally
    borderRadius: 20,
  },
  filters: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  filter: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
