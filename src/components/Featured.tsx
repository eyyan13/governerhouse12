import React from 'react'
import SectionNames from './SectionNames'
import Image from 'next/image'
import womenscollection from "/public/womenscollection.png"
import ps5 from "/public/ps5.png"
import speakers from "/public/speakers.png"
import perfumes from "/public/perfumes.png"

const Featured = () => {

  const products = [
    {
      id: 1,
      image: ps5,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      link: "#",
    },
    {
      id: 2,
      image: womenscollection,
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      link: "#",
    },
    {
      id: 3,
      image: speakers,
      title: "Speakers",
      description: "Amazon wireless speakers",
      link: "#",
    },
    {
      id: 4,
      image: perfumes,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      link: "#",
    },
  ];
  return (
    <section>
    <div className="gap-4 lg:w-[83%] mx-auto mt-10 mb-20">
    <SectionNames text={"Featured"}/>
   
    <h2 className="font-semibold mt-8 text-3xl ">New Arrival</h2>

    </div>


    <div className="max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Main product - PS5 */}
      <div className="relative bg-black text-white rounded-lg overflow-hidden group">
        <Image
          src={products[0].image}
          alt={products[0].title}
          className="object-cover"
          priority
        />
        <div className="absolute bottom-5 left-5 z-10 space-y-2">
          <h2 className="text-2xl font-bold">{products[0].title}</h2>
          <p className="text-sm">{products[0].description}</p>
          <a
            href={products[0].link}
            className="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>

      {/* Smaller products */}
      <div className="grid grid-cols-2 gap-5">
        {products.slice(1).map((product) => (
          <div
            key={product.id}
            className="relative bg-black text-white rounded-lg overflow-hidden group"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="object-cover"
              priority
            />
            <div className="absolute bottom-5 left-5 z-10 space-y-2">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <a
                href={product.link}
                className="inline-block mt-2 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
              >
                Shop Now
              </a>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Featured
