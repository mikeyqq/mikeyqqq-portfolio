import React from "react";

export default function profile() {
  return (
    <div className="flex items-center justify-center mobileSm:w-32 tabletLg:w-36 desktop:w-52 ">
      <img
        className="rounded-full shadow-xl"
        src="./profile.jpg"
        alt="profile avatar image"
      />
    </div>
  );
}
