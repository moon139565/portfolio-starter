import React from 'react';
import CountUp from 'react-countup';
import {InView, useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inview] = useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/* text*/}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'> About me. </h2>
          <h3 className='h3 mb-4'> I'm freelance front-end Developer with over 5 years of experience </h3>
          <p className='mb-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>{
                InView ?
                <CountUp start={0} end={13} duration={4}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br /> experience
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>{
                InView ?
                <CountUp start={0} end={15} duration={4}/> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br /> complated
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>{
                InView ?
                <CountUp start={0} end={12} duration={4}/> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br /> Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center '>
          <button className='btn btn-lg '> Contact me </button>
          <a href='#' className='text-gradient btn-link'>
            My Portfolio
          </a>
        </div>
        </motion.div>

      </div>
    </div>
    </section>
  );
};

export default About;
