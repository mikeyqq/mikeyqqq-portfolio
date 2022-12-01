import React from "react";
import { useTheme } from "next-themes";

export default function Darkmodebutton() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div className="bg-white dark:bg-black">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 text-white bg-black rounded dark:bg-white dark:text-black"
        >
          Dark Toggle
        </button>
      </div>
    </div>
  );
}
