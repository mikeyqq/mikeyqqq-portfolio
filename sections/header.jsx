import React from "react";
import Darkmodebutton from "../components/darkModeButton";

export default function Header() {
  return (
    <div className="flex flex-row justify-between md:justify-around">
      <div></div>
      <Darkmodebutton />
    </div>
  );
}
