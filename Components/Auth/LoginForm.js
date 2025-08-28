import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../ThemedText";
import InputField from "../UI/InputField";
import { useState } from "react";
import Button from "../UI/Button";

function LoginForm({ setForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const loginHandler = () => {};
  const moveToLogin = () => {
    setForm("login");
  };

  const moveToRegister = () => {
    setForm("register");
  };

  return (
    <View style={styles.container}>
      <InputField type="email" content={email} title="אימייל" />
      <InputField type="password" content={password} title="סיסמה" />
      <Button title="התחברות" onPress={loginHandler} mode="primary" />
      <Button
        title="משתמש חדש? הרשם עכשיו"
        onPress={moveToRegister}
        mode="flat"
      />
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {},
});
