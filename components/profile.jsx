import React from "react";

export default function profile() {
  return (
    <div className="max-w-6xl mx-5 xl:mx-auto">
      <img
        className="w-full h-56 rounded-full md:w-full md:h-80 lg:h-96 shadow-lg dark:shadow-slate-800"
        src="/profile.jpg"
        alt="Rounded avatar"
      />
    </div>
  );
}
