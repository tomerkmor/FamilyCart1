import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../ThemedText";
import InputField from "../UI/InputField";
import { useState } from "react";
import Button from "../UI/Button";

function AuthForm({ isLogin }) {
  const [username, setUsername] = useState({ value: "", isValid: true });
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isValid: true,
  });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", isValid: true });

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false,
  });

  const handleEmptyFields = () => {
    // Sets error styling on empty fields.
    let errorFound = 0;
    if (username.value.trim() === "") {
      setUsername({ value: "", isValid: false });
      errorFound = 1;
    }

    if (password.value.trim() === "") {
      setPassword({ value: "", isValid: false });
      errorFound = 1;
    }

    if (isLogin) {
      return errorFound;
    }

    if (email.value.trim() === "") {
      setEmail({ value: "", isValid: false });
      errorFound = 1;
    }

    if (confirmPassword.value.trim() === "") {
      setConfirmPassword({ value: "", isValid: false });
      errorFound = 1;
    }

    if (phoneNumber.value.trim() === "") {
      setPhoneNumber({ value: "", isValid: false });
      errorFound = 1;
    }

    return errorFound;
  };
  const loginHandler = () => {
    // Handle Empty Fields
    const errorFound = handleEmptyFields();
    if (errorFound) return;

    // Check if this user exists

    // Check if the password is correct
  };
  const registerHandler = () => {
    // Handle Empty Fields
    const errorFound = handleEmptyFields();
    console.log("error found? = " + errorFound);
    if (errorFound) return;

    // check if the values are valid

    // check if this username && email exists
  };
  return (
    <View style={styles.container}>
      <InputField type="text" content={username} title="שם משתמש" />
      {!isLogin && <InputField type="email" content={email} title="אימייל" />}
      <InputField type="password" content={password} title="סיסמה" />
      {!isLogin && (
        <>
          <InputField
            type="password"
            content={confirmPassword}
            title="אימות סיסמה"
          />
          <InputField type="number" content={phoneNumber} title="מספר טלפון" />
        </>
      )}

      <Button
        title={isLogin ? "התחברות" : "הרשמה"}
        onPress={isLogin ? loginHandler : registerHandler}
        mode="primary"
      />
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {},
});
