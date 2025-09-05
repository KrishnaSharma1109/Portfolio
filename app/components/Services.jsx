// import React from 'react'
// import Image from 'next/image'
// import { assets, certificationData } from '@/assets/assets'
// import { serviceData } from '@/assets/assets'
// import { motion } from "motion/react"
// const Services = ({isDarkMode}) => {
//   return (
//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
//       <motion.h4
//       initial={{opacity:0,y:-20}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.5,delay:0.3}}
//       className='text-center mb-2 text-lg font-Ovo' >What I achieved</motion.h4>
//       <motion.h2
//       initial={{opacity:0,y:-20}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.5,delay:0.5}}
//       className='text-center text-5xl font=Ovo' >My Certifications</motion.h2>

//       <motion.p
//       initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.5,delay:0.7}}
//       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Here's a collection of certifications I've earned along the way — each one a milestone in my learning journey. They reflect my commitment to growth, skill-building, and staying updated in the ever-evolving tech world.</motion.p>
//       <motion.div
//            initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.6,delay:0.9}}
//       className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
//         {certificationData.map(({icon,title,description,link},index)=>(
//             <motion.div
//             whileHover={{scale:1.05}}
//             key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer  hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
//                 <Image src={icon} alt='' className='w-10'/>
//                 <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
//                 <p className='text-sm text-gray-600 leading-5'>
//                     {description}
//                 </p>
//                 <a href={link} className='flex items-center gap-2 text-sm mt-5'>
//                     READ MORE <Image src={assets.right_arrow} alt='' className='w-4'/>
//                 </a>


//             </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Services
import React, { useState } from 'react';
import Image from 'next/image';
import { assets, certificationData } from '@/assets/assets';
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What I earned
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font=Ovo'
      >
        My Certifications & Achievement
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Here's a collection of certifications I've earned along the way — each one a milestone in my learning journey. They reflect my commitment to growth, skill-building, and staying updated in the ever-evolving tech world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'
      >
        {certificationData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'
          >
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p
              className={`text-sm text-gray-600 leading-5 transition-all duration-300 ${
                expandedCards[index] ? '' : 'line-clamp-3'
              }`}
            >
              {description}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className='flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline'
            >
              {expandedCards[index] ? 'SHOW LESS' : 'READ MORE'}
              <Image src={assets.right_arrow} alt='' className='w-4' />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
