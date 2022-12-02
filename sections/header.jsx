import React from "react";
import Darkmodebutton from "../components/darkModeButton";

export default function Header() {
  return (
    <div className="sticky top-0 dark:bg-black w-full bg-light-grey">
      <div className="flex flex-row justify-between md:justify-around">
        <div className=""></div>
        <Darkmodebutton />
      </div>
    </div>
  );
}
