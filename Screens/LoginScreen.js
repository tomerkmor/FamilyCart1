import { Text } from "react-native";
import AuthForm from "../Components/Auth/AuthForm";
import { useContext, useState } from "react";
import AuthContent from "../Components/Auth/AuthContent";
import { loginUser } from "../util/auth";
import LoadingOverlay from "../Components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  // create navigation between the login and register pages...
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler(credentials) {
    console.log("LoginScreen - trying to login from");
    try {
      setIsAuthenticating(true);
      const token = await loginUser(credentials);
      authCtx.authenticate(token);
      console.log("ID Token:", token);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(
          "Login failed:",
          err.response?.data?.error?.message || err.message
        );
      } else {
        console.log("Login failed:", String(err));
      }
    } finally {
      setIsAuthenticating(false);
    }

    console.log("the end of user login.");
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Loading User..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
