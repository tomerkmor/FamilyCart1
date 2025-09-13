import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { useContext } from "react";
import { ThemeContext } from "../App";

import ThemedView from "../Components/ThemedView";
import ThemedText from "../Components/ThemedText";
import { AuthContext } from "../store/auth-context";

function SettingsScreen() {
  const navigation = useNavigation();
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <ThemedView>
      <ThemedText>SettingsScreen</ThemedText>
      <Header />
      <ThemedText>hello Username</ThemedText>
      <ThemedText>Change Nickname</ThemedText>
      <ThemedText>
        Family Button(add screen for managing the family...)
      </ThemedText>
      <ThemedText>Notifications</ThemedText>
      <Button onPress={logoutHandler} title="Log-out Button"></Button>
    </ThemedView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
