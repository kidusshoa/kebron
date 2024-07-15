const Three = () => {
  return (
    <div className="bg-first h-screen md:h-1/2 w-full  flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Our service statistics
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div className="bg-second overflow-hidden shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-400">
                  Available Houses
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                  1600
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-second overflow-hidden shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-400">
                  New Customers
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                  720
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-second overflow-hidden shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-400">
                  Total Landlords
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                  4900
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-second overflow-hidden shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-400">
                  Total Customers
                </dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-400">
                  5400
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
