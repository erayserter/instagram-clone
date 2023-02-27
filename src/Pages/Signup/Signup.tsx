import React from "react";
import axios from "axios";

import AuthenticationForm from "../../components/Authentication/AuthenticationForm";
import SignupFormFields from "../../components/Authentication/SignupFormFields";
import GeneralFooter from "../../components/General/GeneralFooter";

import { tokenData } from "../../components/Authentication/types";

const Signup = () => {
  const signupHandler = (data: EventTarget) => {
    axios
      .post("http://127.0.0.1:8000/api/user/register/", data)
      .then((res) => {
        const tokenData: tokenData = res.data;
        localStorage.setItem("access_token", tokenData.access);
        localStorage.setItem("refresh_token", tokenData.refresh);
      })
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
