import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";

import ThemedView from "../Components/ThemedView";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";
import AuthForm from "../Components/Auth/AuthForm";
import Button from "../Components/UI/Button";
function AuthScreen() {
  const { theme } = useContext(ThemeContext);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <ThemedView style={styles.container}>
      <View style={[styles.formContainer, { backgroundColor: theme.accent }]}>
        <AuthForm isLogin={isLogin} />

        <Button
          title={isLogin ? "משתמש חדש? הרשם עכשיו" : "התחבר במקום"}
          onPress={switchAuthModeHandler}
          mode="flat"
        />
      </View>
    </ThemedView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginVertical: 48,
    marginHorizontal: 32,
    padding: 22,
    borderRadius: 12,
  },
});
