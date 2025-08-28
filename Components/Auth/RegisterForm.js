import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../ThemedText";
import InputField from "../UI/InputField";
import { useState } from "react";
import Button from "../UI/Button";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerHandler = () => {};
  const moveToRegister = () => {
    setForm("register");
  };
  return (
    <View style={styles.container}>
      <InputField type="email" content={email} title="אימייל" />
      <InputField type="password" content={password} title="סיסמה" />
      <InputField
        type="password"
        content={confirmPassword}
        title="אימות סיסמה"
      />
      <Button title="הרשמה" onPress={registerHandler} mode="primary" />
      <Button title="התחבר במקום" onPress={moveToRegister} mode="flat" />
    </View>
  );
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {},
});
