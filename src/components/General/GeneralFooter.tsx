import React from "react";

const options: string[] = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Locations",
  "Instagram Lite",
  "Contact Uploading & Non-Users",
];

const GeneralFooter = () => {
  return (
    <footer className="mb-[52px] flex flex-col items-center justify-center text-xs text-gray-400">
      <ul className="flex gap-3">
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <div className="my-3">
        <span className="language">English</span>
        <span className="copyright ml-12">&copy; 2023 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default GeneralFooter;
