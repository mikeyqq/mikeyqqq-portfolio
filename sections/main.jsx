import React from "react";
import Profile from "../components/profile";
import About from "./about/about";
import Contact from "./contact/contact";

export default function Main() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col items-center gap-10">
        <div className="mt-1 mb-4 md:mt-8 md:mb-8">
          <Profile />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <About />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <Contact />
        </div>
      </div>
    </div>
  );
}
