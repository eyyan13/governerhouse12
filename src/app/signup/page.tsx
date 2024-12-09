// File: src/app/signup/page.tsx

import Image from "next/image";
import Link from "next/link";
import phoneImage from "/public/phoneImage.png";
import google from "/public/google.png";

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen w-full">
      {/* Left Section (Image) */}
      <div className="lg:w-1/2 w-full flex justify-center bg-white">
        <Image
          src={phoneImage}
          alt="Phone with Shopping Cart"
          className="object-contain w-full h-full"
         
          priority
        />
      </div>

      {/* Right Section (Form) */}
      <div className="lg:w-1/2 w-full px-8 md:px-16 py-8 bg-white">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800">Create an account</h2>
          <p className="text-gray-600 mt-2">Enter your details below</p>
          <form className="mt-6 space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border  rounded-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {/* Email/Phone Input */}
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border  rounded-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {/* Submit Button */}
            <button className="w-full bg-red-600 text-white py-2 rounded-sm font-semibold hover:bg-red-500">
              Create Account
            </button>
          </form>
          {/* Sign up with Google */}
          <button className="w-full mt-4 flex justify-center items-center gap-2 py-2 border border-gray-300 rounded-sm hover:bg-gray-100">
            <Image
              src={google}
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
          {/* Already have account */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
