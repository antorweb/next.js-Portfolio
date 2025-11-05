import React from 'react'
import CommonHead from '../components/common/CommonHead'
import icon1 from '../../public/images/js.png'
import icon2 from '../../public/images/nodejs.png'
import icon3 from '../../public/images/programing.png'
import icon4 from '../../public/images/sass.png'
import icon5 from '../../public/images/typescript.png'
import icon6 from '../../public/images/Next.js.png'
import icon7 from '../../public/images/icon-cypress.svg'
import icon8 from '../../public/images/icon-express.svg'
import icon9 from '../../public/images/icon-figma.svg'
import icon10 from '../../public/images/icon-mongodb.svg'
import icon11 from '../../public/images/icon-nest.svg'
import icon12 from '../../public/images/icon-nodejs.svg'
import icon13 from '../../public/images/icon-postgresql.svg'
import icon14 from '../../public/images/icon-socket.svg'
import icon15 from '../../public/images/icon-storybook.svg'
import icon16 from '../../public/images/icon-tailwindcss.svg'


import Image from 'next/image'

const Skills = () => {
  return (
    <>

    <section id='skill' className='py-24 dark:bg-main '>
        <div className="container ">
            <CommonHead comH2={'Skills'} comP={'The skills, tools and technologies I am really good at:'} />
            <div className=' flex justify-center mt-12'>

            <div className='w-[1200px] flex flex-wrap gap-[86px] '>


              <div>

                <Image  src={icon1} width={64} height={64} alt='icon' />
                <h4>Javascript</h4>
              </div>

              <div>

                <Image  src={icon2} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Node.js</h4>
              </div>

              <div>

                <Image  src={icon3} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>React</h4>
              </div>

              <div>

                <Image  src={icon4} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Sass/Scss</h4>
              </div>

              <div>

                <Image  src={icon5} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                    <div>

                <Image  src={icon6} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                    <div>

                <Image  src={icon7} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>
                    <div>

                <Image  src={icon8} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                    <div>

                <Image  src={icon9} width={35} height={35} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>
                    <div className='text-center'>

                <Image  src={icon10} width={35} height={35} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>
                    <div>

                <Image  src={icon11} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>
                    <div>

                <Image  src={icon12} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>
                    <div>

                <Image  src={icon13} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                 <div>

                <Image  src={icon14} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                 <div>

                <Image  src={icon15} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>

                 <div>

                <Image  src={icon16} width={64} height={64} alt='icon' />
                <h4 className='dark:text-white'>Typescript</h4>
              </div>



            </div>
            </div>

        </div>
    </section>
    
    </>
  )
}

export default Skills