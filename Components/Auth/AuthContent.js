import { StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import ThemedText from "../ThemedText";
import ThemedView from "../ThemedView";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import { ThemeContext } from "../../App";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate }) {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const [credentials, setCredentials] = useState({
    username: { value: "", isValid: true },
    email: { value: "test1@gmail.com", isValid: true },
    password: { value: "709709", isValid: true },
    confirmPassword: { value: "", isValid: true },
    phoneNumber: { value: "", isValid: true },
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  };

  const handleEmptyFields = () => {
    const { username, email, password, confirmPassword, phoneNumber } =
      credentials;

    // Sets error styling on empty fields.
    let errorFound = 0;
    console.log("AuthContent - trying to submit before username...");

    if (email.value.trim() === "") {
      setCredentials((prevState) => {
        return {
          ...prevState,
          email: { value: "", isValid: false },
        };
      });
      errorFound = 1;
    }

    if (password.value.trim() === "") {
      setCredentials((prevState) => {
        return {
          ...prevState,
          password: { value: "", isValid: false },
        };
      });
      errorFound = 1;
    }

    if (isLogin) {
      return errorFound;
    }

    if (username.value.trim() === "") {
      setCredentials((prevState) => {
        return {
          ...prevState,
          username: { value: "", isValid: false },
        };
      });
      errorFound = 1;
    }

    if (confirmPassword.value.trim() === "") {
      setCredentials((prevState) => {
        return {
          ...prevState,
          confirmPassword: { value: "", isValid: false },
        };
      });
      errorFound = 1;
    }

    if (phoneNumber.value.trim() === "") {
      setCredentials((prevState) => {
        return {
          ...prevState,
          phoneNumber: { value: "", isValid: false },
        };
      });
      errorFound = 1;
    }

    console.log("ERRORS FOUND: ", errorFound);
    return errorFound;
  };

  // need to create Credentials object useState...
  function submitHandler() {
    const { username, email, password, confirmPassword, phoneNumber } =
      credentials;

    // Check for emptiness
    const errorFound = handleEmptyFields();

    trimmedEmail = email.value.trim();
    const emailIsValid = trimmedEmail.includes("@");
    const passwordIsValid = password.value.length > 5;
    const passwordsAreEqual = password.value === confirmPassword.value;

    if (!emailIsValid) {
      console.log("the EMAIL is invalid.");
      return;
    } else if (!passwordIsValid) {
      console.log("Entered password: ", password);
      console.log("the PASSWORD is invalid.");
      return;
    } else if (!passwordsAreEqual && !isLogin) {
      console.log("the PASSWORDS are not equals.");
      return;
    }

    if (errorFound) {
      console.log("AuthContent - error has been found.");
      return;
    }
    console.log("going to - onAuthenticate");
    const flatCredentials = {
      //username: credentials.username.value,
      email: credentials.email.value,
      password: credentials.password.value,
      //phoneNumber: credentials.phoneNumber.value,
    };

    onAuthenticate(flatCredentials);
  }
  return (
    <ThemedView style={styles.authContent}>
      <View style={[styles.formContainer, { backgroundColor: theme.accent }]}>
        <AuthForm
          isLogin={isLogin}
          credentials={credentials}
          setCredentials={setCredentials}
        />

        <Button
          title={isLogin ? "התחברות" : "הרשמה"}
          onPress={submitHandler}
          mode="primary"
        />
        <Button
          onPress={switchAuthModeHandler}
          title={isLogin ? "משתמש חדש? הרשם עכשיו" : "התחברות"}
          mode="flat"
        />
      </View>
    </ThemedView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 48,
    marginHorizontal: 32,
    padding: 22,
    borderRadius: 12,
  },
});
