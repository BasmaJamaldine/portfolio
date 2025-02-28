import React, { useEffect, useState } from 'react';
import {Images} from "../../../constant"
import images from '../../../constant/images';
import { MdOutlinePublic } from "react-icons/md";
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Project image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Restaurant App",
      images: [images.food, images.food1, Images.food2, Images.food3],

    },
    {
      title: "Movie Streaming Platform",
      images: [images.movie, images.movie1]
    },
    {
      title: "E-commerce Website",
      images: [Images.shop1, images.shop2, images.shop3]
    },
    {
      title: "Social Media Website",
      images: [images.social, Images.social1, images.sOcial2 ,images.social3]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="relative">
        <div className="absolute top-0 left-0 w-24 h-24">
          <img src={Images.projet} alt="Project icon" className="text-yellow-300" />
        </div>
        <h3 className="text-center text-[#f75023] text-3xl font-semibold mb-4">Portfolio</h3>
        <h2 className="text-center text-4xl font-bold mb-6">My Amazing Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        The most common methods for developing effective websites for desktop include responsive and adaptive techniques. As a developer, it's important to focus on creating flexible layouts and ensuring that content adjusts seamlessly across different screen sizes.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <ImageCarousel images={project.images} />
            <div className="p-4 py-4 flex items-center gap-3">
              <h3 className="text-2xl font-serif font-semibold text-[#f75023]">{project.title}</h3>
        
           <MdOutlinePublic className='font-bold'/>
         
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;