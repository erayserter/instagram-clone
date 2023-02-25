import React from "react";

const SignupFormFields = () => {
  return (
    <div className="mx-10 flex flex-col items-center pb-7 text-sm">
      <h2 className="mb-2.5 text-center text-[17px] font-semibold leading-5 text-ig-secondary-text">
        Sign up to see photos and videos from your friends.
      </h2>
      <button className="my-2 flex w-full items-center justify-center rounded-lg bg-ig-primary-button py-[7px] text-white hover:bg-ig-primary-button-hover">
        <span className="mr-2 inline-block h-4 w-4 bg-[url('https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png')] bg-[length:440px_411px] bg-[-364px_-329px]"></span>
        <span className="font-semibold">Log in with Facebook</span>
      </button>
      <div className="mb-5 mt-2.5 flex w-full items-center gap-2">
        <div className="h-0 w-full border"></div>
        <span>OR</span>
        <div className="h-0 w-full border"></div>
      </div>
      <input
        type="email"
        className="mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Mobile Number or Email"
        name="email"
      />
      <input
        type="text"
        className="mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Full Name"
        name="name"
      />
      <input
        type="text"
        className="mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Username"
        name="username"
      />
      <input
        type="password"
        className="mb-1.5 w-full rounded-sm border bg-gray-100 pt-3 pb-2 pl-2 leading-3"
        placeholder="Password"
        name="password"
      />
      <div className="my-2.5">
        <p className="text-center text-xs font-normal leading-4 text-ig-secondary-text">
          People who use our service may have uploaded your contact information
          to Instagram. <a className="text-ig-link">Learn More</a>
        </p>
        <br />
        <p className="text-center text-xs font-normal leading-4 text-ig-secondary-text">
          By signing up, you agree to our Terms ,
          <a className="text-ig-link"> Privacy Policy</a> and
          <a className="text-ig-link"> Cookies Policy</a> .
        </p>
      </div>
      <button
        type="submit"
        className="my-2 w-full rounded-lg bg-ig-primary-button py-[7px] text-white opacity-70"
      >
        Sign up
      </button>
    </div>
  );
};

export default SignupFormFields;
