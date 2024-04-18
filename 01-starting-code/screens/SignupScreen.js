import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../services/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function submitHandler({ email, password }) {
    setIsAuthenticating(true);
    console.log("credentials===>", email, password);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={submitHandler} />;
}

export default SignupScreen;
