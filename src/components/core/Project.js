import React, { useState } from 'react';
import BedroomImage1 from "../../assets/Bedroom/bdimage1.jpg"
import BedroomImage2 from "../../assets/Bedroom/bdimage2.jpg"
import BedroomImage3 from "../../assets/Bedroom/bdimage3.jpg"
import BedroomImage4 from "../../assets/Bedroom/bdimage4.jpg"
import BedroomImage5 from "../../assets/Bedroom/bdimage5.jpg"
import BedroomImage6 from "../../assets/Bedroom/bdimage6.jpg"
import BedroomImage7 from "../../assets/Bedroom/bdimage7.jpg"
import BedroomImage8 from "../../assets/Bedroom/bdimage8.jpg"
import BedroomImage9 from "../../assets/Bedroom/bdimage9.jpg"

import CellingImage1 from "../../assets/Celling/cellingimage1.jpg"
import CellingImage2 from "../../assets/Celling/cellingimage2.jpg"
import CellingImage3 from "../../assets/Celling/cellingimage3.jpg"
import CellingImage4 from "../../assets/Celling/cellingimage4.jpg"
import CellingImage5 from "../../assets/Celling/cellingimage5.jpg"
import CellingImage6 from "../../assets/Celling/cellingimage6.jpg"
import CellingImage7 from "../../assets/Celling/cellingimage7.jpg"
import CellingImage8 from "../../assets/Celling/cellingimage8.jpg"
import CellingImage9 from "../../assets/Celling/cellingimage9.jpg"


import KitchenImage1 from "../../assets/Kitchen/kitchen1.jpg"
import KitchenImage2 from "../../assets/Kitchen/kitchen2.jpg"
import KitchenImage3 from "../../assets/Kitchen/kitchen3.jpg"
import KitchenImage4 from "../../assets/Kitchen/kitchen4.jpg"
import KitchenImage5 from "../../assets/Kitchen/kitchen5.jpg"
import KitchenImage6 from "../../assets/Kitchen/kitchen6.jpg"
import KitchenImage7 from "../../assets/Kitchen/kitchen7.jpg"
import KitchenImage8 from "../../assets/Kitchen/kitchen8.jpg"
import KitchenImage9 from "../../assets/Kitchen/kitchen9.jpg"

import  LivingImage1 from "../../assets/Living/living1.jpg"
import  LivingImage2 from "../../assets/Living/living2.jpg"
import  LivingImage3 from "../../assets/Living/living3.jpg"
import  LivingImage4 from "../../assets/Living/living4.jpg"
import  LivingImage5 from "../../assets/Living/living5.jpg"
import  LivingImage6 from "../../assets/Living/living6.jpg"
import  LivingImage7 from "../../assets/Living/living7.jpg"
import  LivingImage8 from "../../assets/Living/living8.jpg"
import  LivingImage9 from "../../assets/Living/living9.jpg"

import ToiletImage1 from "../../assets/Toilet/toiletimage1.jpg"
import ToiletImage2 from "../../assets/Toilet/toiletimage2.jpg"
import ToiletImage3 from "../../assets/Toilet/toiletimage3.jpg"
import ToiletImage4 from "../../assets/Toilet/toiletimage4.jpg"
import ToiletImage5 from "../../assets/Toilet/toiletimage5.jpg"
import ToiletImage6 from "../../assets/Toilet/toiletimage6.jpg"
import ToiletImage7 from "../../assets/Toilet/toiletimage7.jpg"
import ToiletImage8 from "../../assets/Toilet/toiletimage8.jpg"
import ToiletImage9 from "../../assets/Toilet/toiletimage9.jpg"





const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const imagesData = [
    { title: "Bedroom Image 1", categories: ["bedroom"], url: BedroomImage1  },
    { title: "Bedroom Image 2", categories: ["bedroom"], url: BedroomImage2 },
    { title: "Bedroom Image 3", categories: ["bedroom"], url:  BedroomImage3  },
    { title: "Bedroom Image 4", categories: ["bedroom"], url:  BedroomImage4 },
    { title: "Bedroom Image 5", categories: ["bedroom"], url:  BedroomImage5  },
    { title: "Bedroom Image 6", categories: ["bedroom"], url:  BedroomImage6  },
    { title: "Bedroom Image 7", categories: ["bedroom"], url: BedroomImage7  },
    { title: "Bedroom Image 8", categories: ["bedroom"], url:  BedroomImage8  },
    { title: "Bedroom Image 9", categories: ["bedroom"], url:  BedroomImage9 },

    { title: "Kitchen Image 1", categories: ["kitchen"], url:KitchenImage1 },
    { title: "Kitchen Image 2", categories: ["kitchen"], url:KitchenImage2 },
    { title: "Kitchen Image 3", categories: ["kitchen"], url: KitchenImage3 },
    { title: "Kitchen Image 4", categories: ["kitchen"], url:KitchenImage4 },
    { title: "Kitchen Image 5", categories: ["kitchen"], url: KitchenImage5 },
    { title: "Kitchen Image 6", categories: ["kitchen"], url:KitchenImage6 },
    { title: "Kitchen Image 7", categories: ["kitchen"], url: KitchenImage7 },
    { title: "Kitchen Image 8", categories: ["kitchen"], url:KitchenImage8 },
    { title: "Kitchen Image 9", categories: ["kitchen"], url:KitchenImage9},

    { title: "Celling Image 1", categories: ["celling"], url:CellingImage1 },
    { title: "Celling Image 2", categories: ["celling"], url:CellingImage2 },
    { title: "Celling Image 3", categories: ["celling"], url:CellingImage3 },
    { title: "Celling Image 4", categories: ["celling"], url:CellingImage4 },
    { title: "Celling Image 5", categories: ["celling"], url:CellingImage5 },
    { title: "Celling Image 6", categories: ["celling"], url:CellingImage6 },
    { title: "Celling Image 7", categories: ["celling"], url:CellingImage7 },
    { title: "Celling Image 8", categories: ["celling"], url:CellingImage8 },
    { title: "Celling Image 9", categories: ["celling"], url:CellingImage9 },

    { title: "Living Image 1", categories: ["living"], url:LivingImage1 },
    { title: "Living Image 2", categories: ["living"], url:LivingImage2 },
    { title: "Living Image 3", categories: ["living"], url:LivingImage3 },
    { title: "Living Image 4", categories: ["living"], url:LivingImage4 },
    { title: "Living Image 5", categories: ["living"], url:LivingImage5 },
    { title: "Living Image 6", categories: ["living"], url:LivingImage6 },
    { title: "Living Image 7", categories: ["living"], url:LivingImage7 },
    { title: "Living Image 8", categories: ["living"], url:LivingImage8 },
    { title: "Living Image 9", categories: ["living"], url:LivingImage9 },

    { title: "Toilet Image 1", categories: ["toilet"], url:ToiletImage1 },
    { title: "Toilet Image 2", categories: ["toilet"], url:ToiletImage2 },
    { title: "Toilet Image 3", categories: ["toilet"], url:ToiletImage3 },
    { title: "Toilet Image 4", categories: ["toilet"], url:ToiletImage4 },
    { title: "Toilet Image 5", categories: ["toilet"], url:ToiletImage5 },
    { title: "Toilet Image 6", categories: ["toilet"], url:ToiletImage6 },
    { title: "Toilet Image 7", categories: ["toilet"], url:ToiletImage7 },
    { title: "Toilet Image 8", categories: ["toilet"], url:ToiletImage8 },
    { title: "Toilet Image 9", categories: ["toilet"], url:ToiletImage9 },

  ];

  const filteredImages = selectedCategory === 'all'
    ? imagesData
    : imagesData.filter(image => image.categories.includes(selectedCategory));

  return (
    <div className="container mx-auto p-4 text-[#a2b2c5] bg-[#ffffff]">

      <div className='mt-7 mb-5'>
        <p className='text-[#696969] lg:text-4xl text-xl   font-[600] crimson '>OUR WORKS</p>
      </div>
      <div className="flex mb-4  justify-center  items-center ">
        <div className='lg:w-11/12 w-[95%]  space-x-5   bg-[#ffffff]  py-2 mb-5  '>
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 focus:outline-none ${selectedCategory === 'all' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          ALL
        </button>
        <button
          onClick={() => handleCategoryChange('bedroom')}
          className={`px-4 py-2  focus:outline-none ${selectedCategory === 'bedroom' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          BEDROOM
        </button>
        <button
          onClick={() => handleCategoryChange('celling')}
          className={`px-4 py-2  focus:outline-none ${selectedCategory === 'celling' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          CELLING
        </button>
        <button
          onClick={() => handleCategoryChange('kitchen')}
          className={`px-4 py-2  focus:outline-none ${selectedCategory === 'kitchen' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          KITCHEN
        </button>
        <button
          onClick={() => handleCategoryChange('living')}
          className={`px-4 py-2   focus:outline-none ${selectedCategory === 'living' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          LIVING
        </button>
        <button
          onClick={() => handleCategoryChange('toilet')}
          className={`px-4 py-2   focus:outline-none ${selectedCategory === 'toilet' ? 'bg-[#3267e0] text-[#fcf5f7]' : 'bg-[#f2f2f2] text-[#a59da6]'}`}>
          TOILET
        </button>
        {/* Add more categories as needed */}
        </div>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 mx-auto mb-5">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.url}  className="w-full h-[400px] rounded-md hover:scale-[110%] " loading='lazy' />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-tr-md rounded-bl-md">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
