export default function Contact() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm text-gray-500 mb-4">
          Home / <span className="text-black">Contact</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
          {/* Left Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l6-6m0 0l6 6m-6-6v18"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-semibold">Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p className="mt-2 font-medium">Phone: +8801611122222</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l6-6m0 0l6 6m-6-6v18"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-semibold">Write To Us</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-2">Emails: customer@exclusive.com</p>
              <p>support@exclusive.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
