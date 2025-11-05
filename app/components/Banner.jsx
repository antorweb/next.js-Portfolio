// import Link from "next/link";
// import React from "react";
// import { SlLocationPin } from "react-icons/sl";
// import { FiGithub } from "react-icons/fi";
// import { FiTwitter } from "react-icons/fi";
// import { FaFigma } from "react-icons/fa6";
// import Image from "next/image";

// // Use public folder path for images
// const bannerImg = "/images/Pic Container.png";

// const Banner = () => {
//   return (
//     <>
//       <section id="banner" className="py-24 dark:bg-main ">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             {/* ------------- left side */}

//             <div>
//               <h1 className="text-[60px] dark:text-white font-bold font-main text-main">
          
//                 Hi, I&#39;m Antor Karmoker
//               </h1>
//               <div className="w-[722px] mt-4 mb-24">
//                 <p className="text-[16px] dark:text-white font-normal font-main text-primary">
//               I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
//                 </p>
//               </div>

//               {/* ------------ location */}
//               <div>
//                 <Link
//                   href={"/"}
//                   className="text-[16px] dark:text-white mb-4 flex items-center gap-4 font-normal text-primary font-main"
//                 >
//                   <SlLocationPin />
//                   Dhaka, Bangladesh
//                 </Link>
//                 <h4 className="text-[16px] dark:text-white font-normal text-primary font-main">
//                   Available for new projects
//                 </h4>
//               </div>

//               <div className="flex items-center gap-5 mt-24">
//                 <Link href={"/"} className="text-[24px] dark:text-white">
//                   <FiGithub />
//                 </Link>
//                 <Link href={"/"} className="text-[24px] dark:text-white">
//                   <FiTwitter />
//                 </Link>
//                 <Link href={"/"} className="text-[24px] dark:text-white">
//                   <FaFigma />
//                 </Link>
//               </div>
//             </div>

//             {/* ------------ right-side */}

//             <div className="w-[350px] h-[380px]  relative bg-[#E5E7EB]">

//               <div className="w-[350px] h-[380px] absolute top-[-37px] flex justify-center  items-center left-[-46px] bg-white shadow-xl"><Image src={Image} alt="main-imag" width={250} height={250}  /></div>

//             </div>

            
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;



import Link from "next/link";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import Image from "next/image";
import AOS from "aos";

// Use public folder path for images
const bannerImg = "/images/Pic Container.png";

const Banner = () => {





  return (
    <>
      <section id="banner" className=" dark:bg-main pt-[207px] pb-[96px]">
        <div className="container">
          {/* ✅ Added responsive direction (column for small screens) */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
            {/* ------------- left side (text section) */}
            <div className="text-center md:text-left">
              <h1 className="text-[40px]  md:text-[60px] dark:text-white font-bold font-main text-main">
                Hi, I&#39;m Antor Karmoker
              </h1>

              {/* ✅ Text width auto for mobile */}
              <div className="w-full md:w-[722px] mt-4 mb-10 md:mb-24">
                <p className="text-[15px] md:text-[16px] dark:text-white font-normal font-main text-primary leading-relaxed">
                  I'm a full stack developer (React.js & Node.js) with a focus
                  on creating (and occasionally designing) exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>

              {/* ------------ location */}
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href={"/"}
                  className="text-[16px] dark:text-white mb-4 flex items-center gap-2 font-normal text-primary font-main"
                >
                  <SlLocationPin />
                  Dhaka, Bangladesh
                </Link>
                <h4 className="text-[16px] dark:text-white font-normal flex items-center gap-[10px] text-primary font-main">
                <span className=" inline-block w-2 h-2 rounded-full bg-green-500"></span>  Available for new projects
                </h4>
              </div>

              {/* ------------ social icons */}
              <div className="flex justify-center md:justify-start items-center gap-5 mt-10 md:mt-24">
                <Link href={"/"} className="text-[24px] dark:text-white">
                  <FiGithub />
                </Link>
                <Link href={"/"} className="text-[24px] dark:text-white">
                  <FiTwitter />
                </Link>
                <Link href={"/"} className="text-[24px] dark:text-white">
                  <FaFigma />
                </Link>
              </div>
            </div>

            {/* ------------ right-side (image section) */}
            <div className="w-[280px] h-[300px] md:w-[350px] md:h-[380px] relative bg-[#E5E7EB] mb-10 md:mb-0">
              <div className="w-[280px] h-[300px] md:w-[350px] md:h-[380px] absolute top-[-25px] md:top-[-37px] flex justify-center items-center left-[-30px] md:left-[-46px] bg-white shadow-xl">
                <Image
                  src={bannerImg}
                  alt="main-image"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
