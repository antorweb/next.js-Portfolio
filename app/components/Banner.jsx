import Link from "next/link";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import Image from "next/image";

// Use public folder path for images
const bannerImg = "/images/Pic Container.png";

const Banner = () => {
  return (
    <>
      <section id="banner" className="py-24">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ------------- left side */}

            <div>
              <h1 className="text-[60px] font-bold font-main text-main">
                {" "}
                Hi, I&#39;m Sagar 👋
              </h1>
              <div className="w-3xl mt-4 mb-24">
                <p className="text-[16px] font-normal font-main text-primary">
                  I&#39;m a full stack developer
                  on creating (and occasionally designing) exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>

              {/* ------------ location */}
              <div>
                <Link
                  href={"/"}
                  className="text-[16px] mb-4 flex items-center gap-4 font-normal text-primary font-main"
                >
                  <SlLocationPin />
                  Ahmedabad, India
                </Link>
                <h4 className="text-[16px] font-normal text-primary font-main">
                  Available for new projects
                </h4>
              </div>

              <div className="flex items-center gap-5 mt-24">
                <Link href={"/"} className="text-[24px]">
                  <FiGithub />
                </Link>
                <Link href={"/"} className="text-[24px]">
                  <FiTwitter />
                </Link>
                <Link href={"/"} className="text-[24px]">
                  <FaFigma />
                </Link>
              </div>
            </div>

            {/* ------------ right-side */}

            <Image src={bannerImg} width={320} height={360} alt="banner-Img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
