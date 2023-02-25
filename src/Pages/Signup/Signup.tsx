import React from "react";
import axios from "axios";

import AuthenticationForm from "../../components/Authentication/AuthenticationForm";
import SignupFormFields from "../../components/Authentication/SignupFormFields";
import GeneralFooter from "../../components/General/GeneralFooter";

const Signup = () => {
  const signupHandler = (data: EventTarget) => {
    axios
      .post("http://127.0.0.1:8000/api/user/register/", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <AuthenticationForm submitAction={signupHandler}>
        <SignupFormFields />
      </AuthenticationForm>
      <GeneralFooter />
    </div>
  );
};

export default Signup;
