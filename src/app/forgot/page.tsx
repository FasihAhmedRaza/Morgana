'use client'
import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="bg-black">
            <div className='bg-black '>
                <div className='flex flex-col pt-6 justify-center items-center h-screen'>
                    <div className="bg-gray-900 rounded-xl px-20 py-14 flex flex-col gap-2 items-center mx-4  max-w-2xl sm:mx-auto sm:w-full sm:max-w-md ">
                        <div>
                            <h2 className="text-3xl text-center font-bold pb-2">
                                Forgot Password ?
                            </h2>
                            <p className="mt- text-sm text-center text-gray-600 dark:text-gray-400">
                                Remember your password? {" "}
                                <Link href="/login"

                                    className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Login here

                                </Link>

                            </p>
                        </div>
                        <form>

                            <div className="mb-3 mt-3">
                                <label
                                    className="block py-2 text-sm font-medium leading-8  text-gray-200"

                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="bg-gray-100 text-base py-3 px-6 first-letter:border
                                    border-gray-300 text-gray-900 leading-8 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full "
                                    defaultValue=""
                                    id="email"
                                    placeholder="Your email address"
                                    required
                                    type="email"
                                />
                            </div>



                            <div className="flex items-center justify-between mt-5 mb-5">
                                <button
                                    className="w-full text-white bg-blue-500 
                     hover:bg-gray-600 focus:ring-4 focus:outline-none
                      focus:ring-blue-300 font-medium rounded-lg
                       text-base px-5 py-2.5 text-center"
                                    type="submit"
                                >
                                    Reset password
                                </button>

                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page