'use client'
import React from 'react';
import Link from 'next/link';

const Signup = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="bg-gray-900 rounded-xl px-20 py-14 flex flex-col gap-2 items-center mx-4 max-w-xl w-full">
                <h2 className="text-2xl font-bold pb-5 text-white">
                    Create an account
                </h2>
                <form className="w-full">
                    <div className="mb-3">
                        <label className="block py-2 text-sm font-medium leading-5 text-gray-200" htmlFor="name">
                            Your name
                        </label>
                        <input
                            className="bg-gray-100 text-base py-3 px-6 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            defaultValue=""
                            id="name"
                            placeholder="Your name"
                            required
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block py-2 text-sm font-medium leading-5 text-gray-200" htmlFor="email">
                            Your email
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
                    {/* Other form fields */}
                    <div className="mb-4">
                        <label className="block py-2 text-sm font-medium leading-5 text-gray-200" htmlFor="password">
                            Your password
                        </label>
                        <input
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            defaultValue=""
                            id="password"
                            placeholder="Your password"
                            required
                            type="password"
                        />
                    </div>
                    {/* Terms and conditions checkbox */}
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium text-gray-400 flex items-start space-x-2">
                           
                        <span>
                             <input className="h-4 w-4  rounded-md border-spacing-2 border-gray-300 focus:ring-indigo-500 text-indigo-600" required type="checkbox" />
                         
                               {" "} I accept the{' '}
                                <Link className="text-primary-600 text-gray-100 hover:text-primary-700" href="/terms" >
                                    Terms and Conditions
                                </Link>
                            </span>
                        </label>
                    </div>
                    {/* Error message */}
                    <div>
                        <p className="text-red-500 pb-5"></p>
                    </div>
                    {/* Submit button */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="submit"
                        >
                            Create an account
                        </button>
                    </div>
                    {/* Sign-in link */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            href="/login"
                        >
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
