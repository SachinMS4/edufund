import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function StartPage() {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  return (
    <div>
      {signIn && <SignIn />}
      {signUp && <SignUp />}
    </div>
  );
}

export default StartPage;
