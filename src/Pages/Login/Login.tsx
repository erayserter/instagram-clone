import React from "react";
import axios from "axios";

import AuthenticationForm from "../../components/Authentication/AuthenticationForm";
import LoginFormFields from "../../components/Authentication/LoginFormFields";
import GeneralFooter from "../../components/General/GeneralFooter";

import { tokenData } from "../../components/Authentication/types";

const Login = () => {
  const loginHandler = (data: EventTarget) => {
    axios
      .post("http://127.0.0.1:8000/api/token/", data)
      .then((res) => {
        const tokenData: tokenData = res.data;
        localStorage.setItem("access_token", tokenData.access);
        localStorage.setItem("refresh_token", tokenData.refresh);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between pt-3">
      <AuthenticationForm isLogin submitAction={loginHandler}>
        <LoginFormFields />
      </AuthenticationForm>
      <GeneralFooter />
    </div>
  );
};

export default Login;
