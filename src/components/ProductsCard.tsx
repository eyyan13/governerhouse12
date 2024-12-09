import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

interface ProductCardProps {
  id: number; // Add a unique ID for the product
  imageSrc: StaticImageData;
  productName: string;
  price: number;
  discountPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  showAddToCart?: boolean;
}

const ProductCard = ({
  id,
  imageSrc,
  productName,
  price,
  discountPrice,
  rating,
  reviews,
  discount,
  showAddToCart = false,
}: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="bg-white rounded-lg p-4 transition relative flex flex-col hover:shadow-lg">
        {/* Conditionally render Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-8 left-8 bg-red-500 text-white text-xs px-4 py-1 rounded-sm z-10">
            -{discount}%
          </span>
        )}

        {/* Image Section */}
        <div className="relative flex items-center justify-center bg-gray-100 h-56 w-full rounded-md mb-4">
          {showAddToCart && (
            <button className="absolute bottom-0 w-full bg-black text-white text-sm py-2 hover:bg-gray-800 transition">
              Add To Cart
            </button>
          )}

          {/* Wishlist and Quick View Icons */}
          <div className="absolute top-3 right-6 flex flex-col items-center justify-center space-y-3">
            <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
              <GoHeart className="text-gray-500 text-lg" />
            </button>
            <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
              <IoEyeOutline />
            </button>
          </div>

          <Image
            src={imageSrc}
            alt={productName}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-medium text-gray-800 mb-2 text-start">
            {productName}
          </h3>
          <div className="flex items-center justify-start space-x-2 mb-2">
            <span className="text-red-500 font-bold text-lg">${price}</span>
            <span className="text-gray-400 line-through text-sm">${discountPrice}</span>
          </div>
          <div className="flex items-center justify-start">
            <div className="flex text-yellow-500">
              {Array.from({ length: rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - rating }, (_, i) => (
                <span key={i}>☆</span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
