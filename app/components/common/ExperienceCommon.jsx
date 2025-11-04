import React from "react";

const ExperienceCommon = () => {
  return (
    <div className="w-[896px] bg-white shadow rounded-b-2xl">
      <div className="p-[32px] flex justify-between">
        <div className="section-col-1">
          <h2 className="text-[32px] font-extrabold font-main text-[#14A800]">
            upwork
          </h2>
        </div>

        <div className="section-col-2">
          <h2 className="text-[20px] font-semibold font-main text-main">
            Sr. Frontend Developer
          </h2>

          <ul className="w-[384px]">
            <li className="text-[16px] font-normal font-main text-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-[16px] font-normal font-main text-main">
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </li>
            <li className="text-[16px] font-normal font-main text-main">
              Sed quis justo ac magna.
            </li>
            <li className="text-[16px] font-normal font-main text-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
        </div>

        <div className="section-col-3">
          <h4 className="text-[16px] font-normal font-main text-main">
            Nov 2021 - Present
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCommon;
