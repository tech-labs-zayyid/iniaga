const PriceList: React.FC = () => {
  return (
    <section className="bg-gray-900 rounded-2xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Pricing Plant
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Simple, transparent pricing for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 flex flex-col rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8 flex gap-3">
              <div className="w-24 h-24 bg-green-400 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-300 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-green-300 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Starter</h3>
                <p className="mt-4 text-gray-400">
                  Get started with our basic features.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-medium text-gray-400 line-through text-center">
                  Rp. 250.000
                </span>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-extrabold text-white">
                  Rp. 200.000
                </span>
                <span className="text-xl font-medium text-gray-400">/mo</span>
              </div>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 user account</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>10 agen/marketer account</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Domain Pribadi</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Maintance Content Feature</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Basic support</span>
              </li>
            </ul>
            <a
              href="/register?paket=starter"
              className="mt-auto block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Subscribe Now
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8 flex gap-3">
              <div className="w-24 h-24 bg-orange-400 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-300 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-orange-300 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Basic</h3>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-medium text-gray-400 line-through text-center">
                  Rp. 350.000
                </span>
              </div>
            </div>
            <div className="mb-8">
              <span className="text-3xl font-extrabold text-white">
                Rp. 300.000
              </span>
              <span className="text-xl font-medium text-gray-400">/mo</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 user accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>25 agen/marketer account</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Domain Pribadi</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Maintance Content Feature</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Standard support</span>
              </li>
            </ul>
            <a
              href="/register?paket=basic"
              className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Subscribe Now
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            {/* <div className="mb-8 flex gap-3">
              <div className="w-24 h-24 bg-blue-400 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-300 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-blue-300 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-4 text-gray-400">
                Perfect for small businesses and startups.
              </p>
            </div> */}
            <div className="mb-8 flex gap-3">
              <div className="w-24 max-w-24 h-24 bg-blue-400 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-300 rounded-3xl"></div>
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-blue-300 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Pro</h3>
                <p className="mt-4 text-gray-400">
                  Perfect for small businesses and startups.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-medium text-gray-400 line-through text-center">
                  Rp. 2.500.000
                </span>
              </div>
            </div>
            <div className="mb-8">
              <span className="text-3xl font-extrabold text-white">
                Rp. 2.000.000
              </span>
              <span className="text-xl font-medium text-gray-400">/years</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 user accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>250 agen/marketer account</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Domain Pribadi</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Maintance Content Feature</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Full support</span>
              </li>
            </ul>
            <a
              href="/register?paket=pro"
              className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
