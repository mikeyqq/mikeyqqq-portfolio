import React from "react";
import Profile from "../components/profile";
import About from "./about/about";
import Contact from "./contact/contact";
import Work from "./work/work";

export default function Main() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center justify-center w-full">
          <Profile />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <About />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <Contact />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <Work />
        </div>
      </div>
    </div>
  );
}
