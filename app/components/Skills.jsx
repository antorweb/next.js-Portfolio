import React from 'react'
import CommonHead from '../components/common/CommonHead'
import icon1 from '../../public/images/js.png'
import icon2 from '../../public/images/nodejs.png'
import icon3 from '../../public/images/programing.png'
import icon4 from '../../public/images/sass.png'
import icon5 from '../../public/images/typescript.png'

import Image from 'next/image'

const Skills = () => {
  return (
    <>

    <section id='skill' className='py-24'>
        <div className="container">
            <CommonHead comH2={'Skills'} comP={'The skills, tools and technologies I am really good at:'} />
            <div className='flex items-center justify-between mt-24'>


              <div>

                <Image  src={icon1} width={64} height={64} alt='icon' />
                <h4>Javascript</h4>
              </div>

              <div>

                <Image  src={icon2} width={64} height={64} alt='icon' />
                <h4>Node.js</h4>
              </div>

              <div>

                <Image  src={icon3} width={64} height={64} alt='icon' />
                <h4>React</h4>
              </div>

              <div>

                <Image  src={icon4} width={64} height={64} alt='icon' />
                <h4>Sass/Scss</h4>
              </div>

              <div>

                <Image  src={icon5} width={64} height={64} alt='icon' />
                <h4>Typescript</h4>
              </div>


            </div>
        </div>
    </section>
    
    </>
  )
}

export default Skills