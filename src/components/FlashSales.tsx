import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard from "./ProductsCard";
import xbox from "/public/x-box.png";
import keyboard from "/public/keyboard.png";
import led from "/public/led.png";
import chair from "/public/chair.png";
import Button from "./Button";
import SectionNames from "./SectionNames";


const FlashSales = () => {
  const products = [
    {
      id: 1,
      imageSrc: xbox,
      productName: "HAVIT HV-G92 Gamepad",
      price: 120,
      discountPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40,
      showAddToCart: false,
    },
    {
      id: 2,
      imageSrc: keyboard,
      productName: "AK-900 Wired Keyboard",
      price: 140,
      discountPrice: 200,
      rating: 4,
      reviews: 64,
      discount: 35,
      showAddToCart: true,
    },
    {
      id: 3,
      imageSrc: led,
      productName: "IPS LCD Gaming Monitor",
      price: 140,
      discountPrice: 200,
      rating: 4,
      reviews: 64,
      discount: 30,
      showAddToCart: false,
    },
    {
      id: 4,
      imageSrc: chair,
      productName: "S-Series Comfort Chair",
      price: 140,
      discountPrice: 200,
      rating: 4,
      reviews: 64,
      discount: 25,
      showAddToCart: false,
    },
  ];

  return (
    <section className="gap-4 max-w-7xl lg:w-[83%] mx-auto mt-20 mb-20">
      <SectionNames text={"Today's"} />

      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between">
        <div>
          <h2 className="font-semibold mt-2 text-3xl tracking-wider">Flash Sales</h2>
        </div>

        <div className="flex flex-col">
          <ul className="flex gap-x-5 text-black text-xs mt-5">
            <li>Days</li>
            <li>Hours</li>
            <li>Minutes</li>
            <li>Seconds</li>
          </ul>
          <ul className="flex gap-x-3 font-bold text-2xl">
            <li>03</li>:<li>23</li>:<li>19</li>:<li>56</li>
          </ul>
        </div>
        <div className="flex gap-x-5 text-3xl">
          <FaArrowLeft className="bg-gray-200 rounded-full text-black" />
          <FaArrowRight className="bg-gray-200 rounded-full text-black" />
        </div>
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

      <div className="flex justify-center mt-10">
        <Button text={"View All Products"} />
      </div>

      <hr className="mt-16" />
    </section>
  );
};

export default FlashSales;
