import React from "react";
import Darkmodebutton from "../components/darkModeButton";
import BrandLogo from "../components/brandLogo";

export default function Header() {
  return (
    <div className="sticky top-0 dark:bg-dark-header w-full bg-light-header">
      <div className="flex flex-row justify-between md:justify-around px-10">
        <BrandLogo />
        <Darkmodebutton />
      </div>
    </div>
  );
}
