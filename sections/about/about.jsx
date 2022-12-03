import React from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div className="ml-12 mr-12">
      <div className="flex flex-col justify-start shadow-xl">
        <div>
          <h1 className="font-bold text-2xl">
            <Typewriter
              options={{
                strings: ["Hi I'm Anchen Huang!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <ul className="list-disc ml-6 mt-4">
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            Developer at... <u>JackRabbitOps</u>.
          </li>
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            I'm interested in ...
          </li>
          <li className="mb-2 text-xl font-light  tracking-wide text-base text-gray-900 dark:text-white">
            I'm currently learning... <u>AWS Cloud Compute</u> &amp;
            <u> Apollo GQL</u>.
          </li>
        </ul>
      </div>
    </div>
  );
}