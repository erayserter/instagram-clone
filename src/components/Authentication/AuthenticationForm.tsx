import React, { FormEvent, PropsWithChildren } from "react";

type Props = {
  isLogin?: boolean;
  submitAction: (data: EventTarget) => void;
};

const AuthenticationForm = ({
  isLogin,
  submitAction,
  children,
}: PropsWithChildren<Props>) => {
  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitAction(e.target);
  };

  return (
    <form
      className="my-3 flex w-[350px] flex-col items-center justify-center"
      onSubmit={formHandler}
    >
      <div className="flex w-full flex-col border">
        <div className="flex items-center justify-center">
          <div className="mt-11 mb-3 h-14 w-44 bg-[url('https://static.cdninstagram.com/rsrc.php/v3/yV/r/KWlDlZddpGI.png')] bg-cover bg-left-top bg-no-repeat"></div>
        </div>
        {children}
      </div>
      <div className="mb-2.5 flex w-full items-center justify-center border text-sm">
        <span className="mr-1">
          {isLogin ? "Don't have an account?" : "Have an account?"}
        </span>
        {isLogin ? (
          <a className="py-[25px] text-ig-primary-button" href="/signup">
            Sign up
          </a>
        ) : (
          <a className="py-[25px] text-ig-primary-button" href="/login">
            Log in
          </a>
        )}
      </div>
      <span className="m-2.5 text-sm">Get the app.</span>
      <div className="my-2.5 flex gap-2">
        <img
          className="h-10"
          alt="Download on the App Store"
          src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
        />
        <img
          className="h-10"
          alt="Get it on Google Play"
          src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
        ></img>
      </div>
    </form>
  );
};

export default AuthenticationForm;
