import React from "react";
import SectionNames from "./SectionNames";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";

const categoryBoxes = [
  {
    icon: <IoIosPhonePortrait />,
    categoryName: "Phones",
  },
  {
    icon: <HiOutlineComputerDesktop />,
    categoryName: "Computers",
  },
  {
    icon: <TbDeviceWatchStats />,
    categoryName: "Smart Watches",
  },
  {
    icon: <CiCamera />,
    categoryName: "Camera",
  },
  {
    icon: <CiHeadphones />,
    categoryName: "Headphones",
  },
  {
    icon: <TbDeviceGamepad />,
    categoryName: "Gaming",
  },
];

const Categories = () => {
  return (
    <section className="gap-4 max-w-7xl lg:w-[83%] mx-auto mt-20 mb-20">
      <SectionNames text={"Categories"} />

      <div>
          <h2 className="font-semibold mt-8 text-3xl tracking-wider ">Best Category Products</h2>
        </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categoryBoxes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  py-8 rounded-md border border-black border-opacity-30"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-2 text-sm  text-black">
              {item.categoryName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
