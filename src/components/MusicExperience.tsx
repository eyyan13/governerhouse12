import Image from "next/image";
import music from "/public/music.png";

const MusicExperience = () => {
  return (
    <section className=" text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-black py-16">
        {/* Left Content */}
        <div className="space-y-5">
          <h3 className="text-green-400 text-lg font-medium">Categories</h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Timer Section */}
          <div className="flex space-x-4 w-full ">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "35", label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-white text-black  rounded-full px-4 py-3"
              >
                <span className="text-xl font-bold">{item.value}</span>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold">
            Buy Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px] lg:h-[300px]">
          <Image
            src={music}
            alt="Music Experience"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MusicExperience;
