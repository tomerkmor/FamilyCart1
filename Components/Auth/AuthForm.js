import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../ThemedText";
import InputField from "../UI/InputField";
import { useState } from "react";
import Button from "../UI/Button";

function AuthForm({ isLogin, credentials, setCredentials }) {
  return (
    <View style={styles.container}>
      {!isLogin && (
        <InputField
          type="text"
          title="שם משתמש"
          content={credentials.username}
          field="username"
          setData={setCredentials}
        />
      )}
      <InputField
        type="email"
        content={credentials.email}
        title="אימייל"
        field="email"
        setData={setCredentials}
      />

      <InputField
        type="password"
        content={credentials.password}
        title="סיסמה"
        field="password"
        setData={setCredentials}
      />
      {!isLogin && (
        <>
          <InputField
            type="password"
            content={credentials.confirmPassword}
            title="אימות סיסמה"
            field="confirmPassword"
            setData={setCredentials}
          />
          <InputField
            type="number"
            content={credentials.phoneNumber}
            title="מספר טלפון"
            field="phoneNumber"
            setData={setCredentials}
          />
        </>
      )}
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {},
});
