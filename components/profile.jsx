import React from "react";

export default function profile() {
  return (
    <div className="max-w-6xl mx-5 xl:mx-auto">
      <img
        className="w-40 h-40 rounded-full md:w-52 md:h-52 shadow-2xl dark:shadow-slate-800"
        src="/profile.png"
        alt="Rounded avatar"
      />
    </div>
  );
}
