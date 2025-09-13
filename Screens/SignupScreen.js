import { Text } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "../Components/Auth/AuthForm";
import AuthContent from "../Components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../Components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler(credentials) {
    console.log("SignupScreen - trying to create account...");
    try {
      console.log("SignupScreen - trying to create account...");
      setIsAuthenticating(true);
      const token = await createUser(credentials);
      authCtx.authenticate(token);

      //navigation.replace("Login");
    } catch (err) {
      if (err.response && err.response.data) {
        console.log("Signup failed1:", err.response.data.error.message);
      } else {
        console.log("Signup failed2:", err.message || err.toString());
      }
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;
