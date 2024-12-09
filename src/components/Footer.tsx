import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import googlePlay from "/public/googlePlay.png"
import appstore from "/public/appstore.png"
import Image from 'next/image';
// import qrcode from "/public/QrCode.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center border-b border-gray-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black w-full text-sm py-2 px-3 outline-none text-gray-300"
              />
              <button className="text-white px-4 py-2  transition">
                &gt;
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <p className="text-sm text-gray-400">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-gray-400 mt-2">exclusive@gmail.com</p>
            <p className="text-sm text-gray-400 mt-2">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">My Account</li>
              <li className="text-sm text-gray-400">Login / Register</li>
              <li className="text-sm text-gray-400">Cart</li>
              <li className="text-sm text-gray-400">Wishlist</li>
              <li className="text-sm text-gray-400">Shop</li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Privacy Policy</li>
              <li className="text-sm text-gray-400">Terms Of Use</li>
              <li className="text-sm text-gray-400">FAQ</li>
              <li className="text-sm text-gray-400">Contact</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Download App</h3>
            <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
            <div className="flex flex-col items-center gap-2 my-4">

              <Image
              src={googlePlay} // Replace with real Google Play badge
                alt="Google Play"
                className="w-24"
              />
              <Image
                src={appstore}// Replace with real App Store badge
                alt="App Store"
                className="w-24"
              />
            </div>
            <div className="flex gap-4">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © Copyright Rimel 2022. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;