import React from "react";

const LoginFormFields = () => {
  return (
    <div className="mx-10 mt-6 flex flex-col items-center text-sm">
      <input
        className="mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Phone number, username, or email"
        name="username"
        type="text"
      />
      <input
        className="base mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Password"
        name="password"
        type="password"
      />
      <button className="my-2 w-full rounded-lg bg-ig-primary-button py-[7px] text-white opacity-70">
        Log in
      </button>
      <div className="mb-5 mt-2.5 flex w-full items-center gap-2">
        <div className="h-0 w-full border"></div>
        <span>OR</span>
        <div className="h-0 w-full border"></div>
      </div>
      <button className="my-2 flex items-center">
        <span className="mr-2 inline-block h-4 w-4 bg-[url('https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png')] bg-[length:440px_411px] bg-[-347px_-329px]"></span>
        <span className="font-semibold text-[#385185]">
          Log in with Facebook
        </span>
      </button>
      <span className="mt-3 mb-5 text-xs text-ig-link">Forgot password?</span>
    </div>
  );
};

export default LoginFormFields;
