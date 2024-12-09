import React from 'react';
import Image from 'next/image';
import hero from '/public/hero.png';

const products = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & LifeStyle",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const Hero = () => {
  return (
    <main>
      <div className="grid grid-cols-12 lg:w-[85%] mx-auto mb-20">

        {/* Left content */}
        <div className="col-span-3 flex flex-col justify-center space-y-5 mt-10">
          {products.map((item) => {
            return (
              <div key={item} className="mb-2 text-lg ">
                {item}
              </div>
            );
          })}
        </div>

        {/* Border section */}
        <div className="col-span-1 border-l"></div>

        {/* Right image section */}
        <div className="col-span-8 relative w-full h-[500px]"> {/* Adjust height as needed */}
          <Image 
            src={hero} 
            alt="hero"
            layout="fill" // Makes the image take full width and height
            objectFit="contain" // Ensures the image scales properly
          />
        </div>

      </div>
    </main>
  );
};

export default Hero;
