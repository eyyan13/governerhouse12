import React from 'react'
import SectionNames from './SectionNames'
import ProductCard from './ProductsCard'
import Button from './Button'
import coat from "/public/coat.png";
import cpu from "/public/cpu.png";

import purse from "/public/purse.png";
import shelf from "/public/shelf.png";




const BestSelling = () => {


    const products = [
        {
          id:5,
          imageSrc: coat,
          productName: "The north coat",
          price: 120,
          discountPrice: 160,
          rating: 5,
          reviews: 88,
          discount:0
        },
        { 
          id:6,
          imageSrc: purse,
          productName: "Gucci duffle bag",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
        id:7,
            imageSrc: cpu ,
            productName: "RGB liquid CPU Cooler",
            price: 140,
            discountPrice: 200,
            rating: 4,
            reviews: 64,
            discount:0
          },
        {
          id:8,
          imageSrc: shelf ,
          productName: "Small BookSelf",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
    ]

  return (
    <section className="gap-4 lg:w-[83%] mx-auto mt-20 mb-20 ">
        <SectionNames text={"Best Selling Products"}/>
        <div className='flex justify-between items-center'>
          <h2 className=" mt-8 text-4xl tracking-wider  font-semibold">Best Selling Products</h2>
          <Button text={"View All"}/>
        </div>

    {/* Product Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
  {products.map((product) => (
    // Remove the outer Link here
    <div key={product.id}>
      <ProductCard {...product} />
    </div>
  ))}
</div>

        </section>
  )
}

export default BestSelling
