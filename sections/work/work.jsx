import React from "react";
import Image from "next/image";
import jro from "../../public/JackRabbitOps.png";
import ah from "../../public/anchenhuang.png";

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
  ];
  return (
    <div className="ml-12 mr-12  dark:shadow-slate-300 px-3 py-3">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {work.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start shadow-xl px-2 py-2 w-full font-light"
          >
            <div className="w-full h-52 overflow-scroll mt-2 ">
              <a href="https://www.anchenhuang.com/">
                <Image
                  src={item.thumbnail}
                  alt="jackrabbitops picture"
                  className="object-fill"
                  width={700}
                  height={700}
                />
              </a>
            </div>
            <div className="mt-10 border-b-4">
              <a href="https://www.jackrabbitops.com/">
                <div className="font-bold text-xl lg:text-2xl">
                  {item.title}
                </div>
              </a>
            </div>
            <div className="mt-2 h-14 overflow-scroll border-b-4">
              {item.description}
            </div>
            <div className="mt-4 h-14 border-b-4">{item.technology}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// return (

// );

//   <div className="ml-12 mr-12">
//     <div className="flex flex-row justify-between">
//       <div className="ml-12 mr-12">
//         <div className="flex flex-col justify-start shadow-xl">
//           {/* <img/> */}
//           <div>test</div>
//           <div>test</div>
//           <div>test</div>
//           <div>test</div>
//         </div>
//       </div>
//       <div className="ml-12 mr-12">
//         <div className="flex flex-col justify-start shadow-xl">
//           {/* <img/> */}
//           <div>test</div>
//           <div>test</div>
//           <div>test</div>
//           <div>test</div>
//         </div>
//       </div>
//     </div>
//   </div>
