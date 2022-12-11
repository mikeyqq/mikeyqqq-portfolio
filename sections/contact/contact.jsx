import React from "react";

export default function About() {
  return (
    <div className="ml-12 mr-12 dark:shadow-slate-300 px-3 py-3 border-2 bg-white border-white dark:bg-dark-main">
      <div className="flex flex-col justify-start px-2 py-2">
        <div>
          <h1 className="font-bold text-2xl">Contact</h1>
        </div>
        <ul className="list-disc ml-6 mt-4">
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            <a className="font-bold">Email:</a>{" "}
            <a href="mailto:acmhuang@gmail.com">
              <u>acmhuang@gmail.com</u>
            </a>
          </li>
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            <a className="font-bold">GitHub:</a>{" "}
            <a
              href="https://github.com/mikeyqq"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>@mikeyqq</u>
            </a>
          </li>
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            <a className="font-bold">LinkedIn:</a>{" "}
            <a
              href="https://www.linkedin.com/in/viewinganchen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Anchen Huang</u>
            </a>
          </li>
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            <a className="font-bold">Website:</a>{" "}
            <a
              href="https://www.anchenhuang.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Anchen Huang</u>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
