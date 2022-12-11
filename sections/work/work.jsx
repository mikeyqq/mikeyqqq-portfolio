import React from "react";
import Image from "next/image";
import jro from "../../public/JackRabbitOps.png";
import ah from "../../public/anchenhuang.png";
import wf from "../../public/wayfast-landing-page.png";

export default function Work() {
  const work = [
    {
      thumbnail: ah,
      title: "Personal Portfolio",
      description: "This is a personal website built with NextJS & TailwindCSS",
      technology: "NextJS | TailwindCSS",
    },
    {
      thumbnail: jro,
      title: "JackRabbit Ops",
      description:
        "Create Business Processes Through Conversation! · AI Generated, No Work Required. · Delivered High Quality Documentation · Easily Distributed & Completely Editable.",
      technology: "NextJS | TailwindCSS | Apollo GraphQL | AWS Jasper",
    },
    {
      thumbnail: wf,
      title: "WayFast Inc",
      description:
        "Cannabis Cultivation Smart Scales! · Automatically Capture data · Increase planting efficiency · Upload Harvest File Anywhere.",
      technology: "NextJS | TailwindCSS | Apollo GraphQL | AWS Jasper",
    },
  ];
  return (
    <div className="ml-12 mr-12  dark:shadow-slate-300 px-3 py-3">
      <div className="flex flex-wrap lg:flex-row gap-10">
        {work.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start px-2 py-2 w-full font-light bg-white"
          >
            <div className="w-full h-52 overflow-scroll mt-2 ">
              <a href="https://www.mikeyqq.com/">
                <Image
                  src={item.thumbnail}
                  alt="jackrabbitops picture"
                  className="object-fill w-full"
                  width={700}
                  height={700}
                />
              </a>
            </div>
            <div className="mt-10">
              <a href="https://www.jackrabbitops.com/">
                <div className="font-bold text-xl lg:text-2xl">
                  {item.title}
                </div>
              </a>
            </div>
            <div className="mt-2 h-14 overflow-scroll">{item.description}</div>
            <div className="mt-4 h-14 ">{item.technology}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
