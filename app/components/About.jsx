// import React from "react";
// import CommonHead from "./common/CommonHead";
// import Image from "next/image";
// const AboutImg = "/images/aboutImg.png";

// const About = () => {
//   return (
//     <>
//       <section id="about" className="py-24 bg-[#F9FAFB] dark:bg-main">
//         <div className="container">
//           <CommonHead comH2={"About me"} />

//           <div className="flex justify-between items-center mt-24">
//             {/* ---------- left-side */}
//             <div className="w-[450px] h-[500px] bg-[#E5E7EB] relative">
//               <div className="w-[450px] h-[500px] bg-white shadow-2xs absolute top-[-35px] right-[-56px]"></div>
//             </div>


//             {/* ------------ right-side */}
//             <div>
//               <h2 className="text-[30px] dark:text-white font-semibold font-main text-main">
//                 Curious about me? Here you have it:
//               </h2>

//               <div className="w-[543px]">
//                 <div className="mt-6">
//                   <h4 className="text-[16px] font-normal dark:text-white font-main text-primary">
//                     I&#39;m a passionate,
//                     <a className=" underline" href="">
//                       self-proclaimed designer
//                     </a>{" "}
//                     who specializes in full stack development (React.js &
//                     Node.js). I am very enthusiastic about bringing the
//                     technical and visual aspects of digital products to life.
//                     User experience, pixel perfect design, and writing clear,
//                     readable, highly performant code matters to me.
//                   </h4>
//                 </div>

//                 <div className="my-8">
//                   <h4 className="text-[16px] dark:text-white font-normal font-main text-primary">
//                     I began my journey as a web developer in 2015, and since
//                     then, I&#39;ve continued to grow and evolve as a developer,
//                     taking on new challenges and learning the latest
//                     technologies along the way. Now, in my early thirties, 7
//                     years after starting my web development journey, I&#39;m
//                     building cutting-edge web applications using modern
//                     technologies such as Next.js, TypeScript, Nestjs,
//                     Tailwindcss, Supabase and much more.
//                   </h4>
//                 </div>

//                 <div>
//                   <h4 className="text-[16px] dark:text-white font-normal font-main text-primary">
//                     I am very much a progressive thinker and enjoy working on
//                     products end to end, from ideation all the way to
//                     development.
//                   </h4>
//                 </div>
//                 <div className="my-8">
//                   <h4 className="text-[16px] dark:text-white font-normal font-main text-primary">
//                     When I&#39;m not in full-on developer mode, you can find me
//                     hovering around on twitter or on indie hacker, witnessing
//                     the journey of early startups or enjoying some free time.
//                     You can follow me on Twitter where I share tech-related
//                     bites and build in public, or you can follow me on GitHub.
//                   </h4>
//                 </div>
//                 <div>
//                   <h4 className="text-[16px] dark:text-white font-normal font-main text-primary">
//                     One last thing, I&#39;m available for freelance work, so feel
//                     free to reach out and say hello! I promise I don&#39;t bite 😉
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;




import React from "react";
import CommonHead from "./common/CommonHead";
import Image from "next/image";

const AboutImg = "/images/aboutImg.png";

const About = () => {
  return (
    <>
      <section id="about" className="py-24 bg-[#F9FAFB] dark:bg-main">
        <div className="container mx-auto">
          <CommonHead comH2={"About me"} />

          {/* ✅ Responsive grid layout added */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mt-24">
            {/* ---------- left-side (image section) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[500px] bg-[#E5E7EB]">
                <div className="absolute top-[-25px] right-[-30px] md:top-[-35px] md:right-[-56px] bg-white shadow-2xs w-[300px] h-[350px] md:w-[450px] md:h-[500px]"></div>
              </div>
            </div>

            {/* ------------ right-side (text section) */}
            <div className="flex flex-col justify-center  md:text-left items-center md:items-start mx-auto">
              <h2 className="text-[26px] md:text-[30px] dark:text-white font-semibold font-main text-main">
                Curious about me? Here you have it:
              </h2>

              <div className="w-full md:w-[543px] mt-6">
                <h4 className="text-[15px] md:text-[16px] font-normal dark:text-white font-main text-primary leading-relaxed">
                  I&#39;m a passionate,
                  <a className="underline" href="">
                    self-proclaimed designer
                  </a>{" "}
                  who specializes in full stack development (React.js & Node.js).
                  I am very enthusiastic about bringing the technical and visual
                  aspects of digital products to life. User experience, pixel
                  perfect design, and writing clear, readable, highly performant
                  code matters to me.
                </h4>

                <div className="my-8">
                  <h4 className="text-[15px] md:text-[16px] dark:text-white font-normal font-main text-primary leading-relaxed">
                    I began my journey as a web developer in 2015, and since
                    then, I&#39;ve continued to grow and evolve as a developer,
                    taking on new challenges and learning the latest
                    technologies along the way. Now, in my early thirties, 7
                    years after starting my web development journey, I&#39;m
                    building cutting-edge web applications using modern
                    technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
                    Supabase and much more.
                  </h4>
                </div>

                <h4 className="text-[15px] md:text-[16px] dark:text-white font-normal font-main text-primary leading-relaxed">
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </h4>

                <div className="my-8">
                  <h4 className="text-[15px] md:text-[16px] dark:text-white font-normal font-main text-primary leading-relaxed">
                    When I&#39;m not in full-on developer mode, you can find me
                    hovering around on Twitter or on Indie Hacker, witnessing
                    the journey of early startups or enjoying some free time.
                    You can follow me on Twitter where I share tech-related
                    bites and build in public, or you can follow me on GitHub.
                  </h4>
                </div>

                <h4 className="text-[15px] md:text-[16px] dark:text-white font-normal font-main text-primary leading-relaxed">
                  One last thing, I&#39;m available for freelance work, so feel
                  free to reach out and say hello! I promise I don&#39;t bite 😉
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
