"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React, { Suspense, useState } from "react";

type WhyType = {
  option: string;
  title: string;
  description: string;
};

const Why: React.FC = () => {
  const content: Array<WhyType> = [
    {
      option: "Visualize the future",
      title: "Imagine the Future",
      description:
        "We conceive of a future digital solution or system, often involving innovative technologies and strategies, such as AI, cloud computing, or blockchain.",
    },
    {
      option: "Optimize and detail",
      title: "Shape the Solution",
      description:
        "We design and develop a solution, carefully crafting its architecture, functionalities, and user experience, ensuring it aligns with business objectives and user needs.",
    },
    {
      option: "Forming Shapes",
      title: "Perfect the Product",
      description:
        "We refine and optimize a solution, addressing any issues, improving performance, enhancing usability, and ensuring it meets the highest quality standards.",
    },
    {
      option: "Advance and refine",
      title: "Raise the bar",
      description:
        "We  improve the quality, efficiency, or effectiveness of a solution or service, often through advanced technologies or innovative approaches, such as automation, machine learning, or cybersecurity best practices.",
    },
  ];
  const [selectedContent, setSelectedContent] = useState<WhyType>(content[0]);

  const handleClick = (content: WhyType) => {
    setSelectedContent(content);
  };
  return (
    <div className="relative w-full min-h-screen  border-b-8 border-black ">
      <Image
        src="/why-tilde-bg.webp"
        width={1728}
        height={1017}
        alt="why-bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-20 opacity-85"
      />
      <Spline
        /* scene="https://prod.spline.design/hVs1QugFsm6oaFMR/scene.splinecode" */
        scene="https://prod.spline.design/9MhiS6SDPAW5Nfba/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-90"
      />
      <div className="  flex flex-col sm:flex-row items-center justify-between py-8 sm:py-0 sm:justify-start  max-w-6xl w-full mx-auto min-h-screen relative">
        <div className="flex flex-col items-start justify-between text-white gap-3 sm:gap-8 px-4 sm:px-8 z-30 w-full sm:w-1/2 mb-[40vh] sm:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl metalic_gradient flex items-center gap-1 font-inter">
            <span className="font-bold">|</span>Why Tilde
          </h2>

          <p className="font-light font-inter max-w-md text-xl sm:text-2xl md:text-3xl">
            We bring{" "}
            <span className="font-instrument italic font-light">
              AI, engineering & content
            </span>{" "}
            expertise
          </p>
          <div className="flex flex-col  sm:gap-3 md:gap-6">
            {content.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col relative text-start ${
                  selectedContent.option === item.option ? "" : "nav-hover-btn"
                }  items-start p-4  cursor-pointer`}
                onClick={() => handleClick(item)}
              >
                <h1 className="text-xl sm:text-2xl md:text-4xl font-power font-light">
                  {item.option}
                </h1>
                {selectedContent.option === item.option && (
                  <Image
                    src="/Line.png"
                    width={393}
                    height={3}
                    alt="line"
                    className="absolute bottom-0 left-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-[20vh] sm:h-[40vh] z-50 pb-10 sm:pb-0  w-full font-inknut sm:max-w-xl text-white text-center flex flex-col items-center justify-center mb-4 sm:mb-0 transition-all">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2">
            {selectedContent.title}
          </h1>
          <p className="max-w-sm sm:max-w-md leading-10 text-sm sm:text-lg">
            {selectedContent.description}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 h-[25vh] sm:h-[60vh] z-40 bg-gradient-to-b from-transparent via-black/70 to-black  w-full sm:max-w-xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] sm:h-[80vh] z-30 bg-black rounded-t-[64px] sm:rounded-t-[124px] w-full  sm:max-w-xl ">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              /*  scene="https://prod.spline.design/QAlk8vFmU3x3RuPd/scene.splinecode" */
              scene="https://prod.spline.design/VcJSyKnc2Dbe4i2v/scene.splinecode"
              /*scene="https://prod.spline.design/ufrOf0h-wB05ptG3/scene.splinecode" */
              className="rounded-t-[64px] sm:rounded-t-[124px]"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Why;
