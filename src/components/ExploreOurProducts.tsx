import React from 'react'
import SectionNames from './SectionNames'
import ProductCard from './ProductsCard'
import car from "/public/car.png"
import dogfood from "/public/dogfood.png"
import curology from "/public/curology.png"
import dslr from "/public/dslr.png"
import jacket from "/public/jacket.png"
import soccer from "/public/soccer.png"
import laptop from "/public/laptop.png"
import gamePad from "/public/gamePad.png"
import Button from './Button'


const ExploreOurProducts = () => {

    const products = [
        {
          id:9,
          imageSrc: dogfood,
          productName: "Breed Dry Dog Food",
          price: 120,
          discountPrice: 160,
          rating: 5,
          reviews: 88,
          discount:0
        },
        {
          id:10,
          imageSrc: dslr,
          productName: "CANON EOS DSLR Camera",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
          id:11,
            imageSrc: laptop ,
            productName: "ASUS FHD Gaming Laptop ",
            price: 140,
            discountPrice: 200,
            rating: 4,
            reviews: 64,
            discount:0
          },
        {
          id:12,
          imageSrc: curology ,
          productName: "Curology Product Set ",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
          id:13,
          imageSrc: car ,
          productName: "Kids Electric Car",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
          id:14,
          imageSrc: soccer ,
          productName: "Jr. Zoom Soccer Cleats",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
          id:15,
          imageSrc: gamePad ,
          productName: "GP11 Shooter USB Gamepad",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        },
        {
          id:16,
          imageSrc: jacket ,
          productName: "Quilted Satin Jacket",
          price: 140,
          discountPrice: 200,
          rating: 4,
          reviews: 64,
          discount:0
        }]

  return (
    <section className="gap-4 max-w-7xl lg:w-[83%] mx-auto mt-20 mb-20">
    <SectionNames text={" Our Products"}/>
   
    <h2 className="font-semibold mt-8 text-3xl tracking-wider">Explore our Products</h2>

  {/* Product Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 ">
        {products.map((product, id) => (
          <ProductCard  key={id} {...product}/>
        ))}
</div>
<div className="flex justify-center mt-10">
        <Button text={"View All Products"}></Button>
      </div>
   


 </section>
  )
}

export default ExploreOurProducts

