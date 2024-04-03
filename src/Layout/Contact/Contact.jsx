import React from "react";

const Contact = () => {
  return (
    <div>
      <form className="w-full h-full gap-4 p-6 md:p-32 md:flex md:flex-col md:justify-center">
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              First Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Last Name
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              City
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>

          <div className="w-full md:px-24 px-3 mb-6 md:ml-24 md:w-[50%] ">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Zip
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-700 bg-gray-200 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <div className="flex justify-center m-4">
          <button className="px-10 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
