import Head from "next/head";
import React from "react";

export default function Main() {
  return (
    <div>
      <div className="mt-6">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NextJS dark Mode With Tailwind CSS
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            install & setup nextjs dark mode using tailwind css 3
          </p>
        </div>
      </div>
    </div>
  );
}