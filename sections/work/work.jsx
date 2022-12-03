import React from "react";
import { useState } from "react";

export default function Work() {
  const [state, setState] = useState([
    {
      thumbnail: "imgUrl",
      title: "name",
      description: "This is a personal website built with NextJS & TailwindCSS",
      technology:
        "NextJS | TailwindCSS | Apollo GraphQL | AWS Jasper | Everything",
    },
    {
      thumbnail: "imgUrl",
      title: "name",
      description: "This is a personal website built with NextJS & TailwindCSS",
      technology:
        "NextJS | TailwindCSS | Apollo GraphQL | AWS Jasper | Everything",
    },
  ]);

  return (
    <div className="ml-12 mr-12">
      <div className="flex flex-row justify-between">
        <div className="ml-12 mr-12">
          <div className="flex flex-col justify-start shadow-xl">
            {/* <img/> */}
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
        <div className="ml-12 mr-12">
          <div className="flex flex-col justify-start shadow-xl">
            {/* <img/> */}
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>
    </div>
  );
}
