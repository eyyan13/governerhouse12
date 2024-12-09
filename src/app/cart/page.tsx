import Image from "next/image";
import led from "/public/led.png"
import gamePad from "/public/gamePad.png"
export default function Cart() {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-gray-500 mb-4">
            Home / <span className="text-black">Cart</span>
          </div>
  
          {/* Table Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b">Product</th>
                  <th className="p-4 border-b">Price</th>
                  <th className="p-4 border-b">Quantity</th>
                  <th className="p-4 border-b">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b flex items-center">
                    <button className="mr-4 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Image
                      src={led}
                      alt="LCD Monitor"
                      className="w-12 h-12 rounded mr-4"
                    />
                    LCD Monitor
                  </td>
                  <td className="p-4 border-b">$650</td>
                  <td className="p-4 border-b">
                    <select className="border border-gray-300 rounded-lg p-2">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </td>
                  <td className="p-4 border-b">$650</td>
                </tr>
                <tr>
                  <td className="p-4 border-b flex items-center">
                    <button className="mr-4 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Image
                      src={gamePad}
                      alt="Gamepad"
                      className="w-12 h-12 rounded mr-4"
                    />
                    H1 Gamepad
                  </td>
                  <td className="p-4 border-b">$550</td>
                  <td className="p-4 border-b">
                    <select className="border border-gray-300 rounded-lg p-2">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </td>
                  <td className="p-4 border-b">$1100</td>
                </tr>
              </tbody>
            </table>
  
            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
                Return To Shop
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
                Update Cart
              </button>
            </div>
          </div>
  
          {/* Coupon & Total Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coupon Code */}
            <div className="col-span-2 flex items-center">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-grow p-3 border border-gray-300 rounded-sm"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-sm mx-10">
                Apply Coupon
              </button>
            </div>
  
            {/* Cart Total */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total:</span>
                <span>$1750</span>
              </div>
              <button className="bg-red-600 text-white w-full px-6 py-3 rounded-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  