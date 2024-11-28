import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa"
import { SiLaravel } from "react-icons/si"
import { Images } from '../../../constant';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: 'HTML 5', icon: FaHtml5, color: 'bg-orange-500' },
    { name: 'CSS 3', icon: FaCss3Alt, color: 'bg-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'bg-yellow-400' },
    { name: 'React', icon: FaReact, color: 'bg-blue-400' },
    { name: 'Sass', icon: FaSass, color: 'bg-pink-500' },
    { name: 'Laravel', icon: SiLaravel, color: 'bg-red-500' }
]

const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-24 h-24 ${skill.color} rounded-full flex items-center justify-center mb-4`}
      >
        <IconComponent className="w-14 h-14 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
   
    </motion.div>
  )
}
const Skils = () => {
   
        useEffect(() => {
            AOS.init({
                duration: 2000, 
              
            });
        }, []);
    return (
        <section data-aos="fade-up" className="py-20 px-6 relative   ">
             <div className=" hidden md:block absolute top-0 left-0 ">
        <img src={Images.sklis} alt="" className="text-yellow-300" />
      </div>
      <div className="absolute bottom-0  right-0 ">
        <img src={Images.sklis1} alt="" className="text-purple-300" />
      </div>
        <div className="container   px-[12vw]">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#f75023] text-3xl font-semibold text-center mb-12"
          >
            My Skills
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          I Develop Skills Regularly to Keep Me Update
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-3xl">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index}  />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skils;