"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl px-16 py-14 flex flex-col gap-2 items-center mx-4 max-w-xl w-full">
        <div>
          <h2 className="text-3xl text-center font-bold pb-2">
            Forgot Password ?
          </h2>
          <p className="mt- text-sm text-center text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Login here
            </Link>
          </p>
        </div>
        <form className="w-full">
          <div className="mb-3 mt-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="bg-gray-100 text-base py-3 px-6 border border-gray-300 leading-7 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              defaultValue=""
              id="email"
              placeholder="Your email address"
              required
              type="email"
            />
          </div>

          <div className="flex items-center justify-between mt-5 mb-5">
            <Link
              href="/reset-password"
              className="w-full text-white bg-blue-500 
                     hover:bg-gray-600 focus:ring-4 focus:outline-none
                      focus:ring-blue-300 font-medium rounded-lg
                       text-base px-5 py-2.5 text-center"
            >
              Reset password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
