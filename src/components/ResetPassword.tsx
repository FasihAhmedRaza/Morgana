"use client";
import React from "react";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl px-16 py-14 flex flex-col gap-2 items-center mx-4 max-w-xl w-full">
        <h2 className="text-2xl text-center font-bold pb-5 text-white">
          Reset Password
        </h2>
        <form className="w-full">
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="bg-gray-100 leading-7 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              defaultValue=""
              id="password"
              name="password"
              placeholder="New Password"
              required
              type="password"
            />
          </div>
          {/* Password field */}
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="password"
            >
              Confirm New Password
            </label>
            <input
              className="bg-gray-100 leading-7 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              defaultValue=""
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm New Password"
              required
              type="password"
            />
          </div>
          {/* Error message */}
          <div>
            <p className="text-red-500 pb-5"></p>
          </div>
          {/* Save */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-7"
            >
              Save
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
