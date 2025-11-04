import React from 'react'
import CommonHead from './common/CommonHead'
import AboutImg from '../../public/images/aboutImg.png'
import Image from 'next/image'


const About = () => {
  return (
    <>
    

    <section id='about' className='py-[96px]'>
        <div className="container">
            <CommonHead comH2={'About me'} />

<div className='flex justify-between items-center mt-24'>

            {/* ---------- left-side */}
            <Image src={AboutImg} alt='About-Img' width={400} height={400} />

{/* ------------ right-side */}
<div>
    <h2 className='text-[30px] font-semibold font-main text-main'>Curious about me? Here you have it:</h2>

    <div className='w-[584px]'>


    <div className='mt-[24px]'><h4 className='text-[16px] font-normal font-main text-primary'>I'm a passionate, <a className=' underline' href="">self-proclaimed designer</a> who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</h4></div>

        <div className='my-8'><h4 className='text-[16px] font-normal font-main text-primary'>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</h4></div>


            <div><h4 className='text-[16px] font-normal font-main text-primary'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</h4></div>
            <div className='my-8'><h4 className='text-[16px] font-normal font-main text-primary'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</h4></div>
            <div><h4 className='text-[16px] font-normal font-main text-primary'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</h4></div>
 

    </div>



</div>

</div>


        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default About