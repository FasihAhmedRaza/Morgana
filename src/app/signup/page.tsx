import React from 'react'

const Signup = () => {
    return (
     <div className="bg-black">
        <div className='bg-black '>
    <div className='flex flex-col pt-6 justify-center items-center h-screen'>
        <div className="bg-gray-900 rounded-xl px-20 py-14 flex flex-col gap-2 items-center mx-4  max-w-2xl sm:mx-auto sm:w-full sm:max-w-md ">
            <h2 className="text-2xl font-bold pb-5">
                Create an account
            </h2>
            <form>
                <div className="mb-3">
                    <label
                       className="block py-2 text-sm font-medium leading-5  text-gray-200"
                       
                       htmlFor="email">
                       Your name
                    </label>
                    <input
                       className="bg-gray-100 text-base py-3 px-6 first-letter:border
                        border-gray-300  text-gray-900  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full "
                        defaultValue=""
                        id="name"
                        placeholder="Your name"
                        required
                        type="text"
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="block py-2 text-sm font-medium leading-5  text-gray-200"
                       
                        htmlFor="email"
                    >
                        Your email
                    </label>
                    <input
                        className="bg-gray-100 text-base py-3 px-6 first-letter:border
                         border-gray-300 text-gray-900  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full "
                        defaultValue=""
                        id="email"
                        placeholder="Your email address"
                        required
                        type="email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block py-2 text-sm font-medium leading-5  text-gray-200"
    
                        htmlFor="password"
                    >
                        Your password
                    </label>
                    <input
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full "
                        defaultValue=""
                        id="password"
                        placeholder="Your password"
                        required
                        type="password"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-400  flex items-start space-x-2">
                        <div><input className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600" required type="checkbox" /></div>
                        <div>
                            I accept the{' '}
                            <a className="text-primary-600 text-gray-100 hover:text-primary-700" href="/terms" target="_blank">Terms and Conditions</a>

                        </div>
                    </label>
                </div>
                <div>
                    <p className="text-red-500 pb-5" />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <button
                        className="w-full text-white bg-blue-500 
                         hover:bg-gray-600 focus:ring-4 focus:outline-none
                          focus:ring-blue-300 font-medium rounded-lg
                           text-sm px-5 py-2.5 text-center"
                        type="submit"
                    >
                        Create an account
                    </button>

                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="/login"
                    >
                        Sign in here
                    </a>
                </p>
            </form>
        </div>
    </div>
</div>

     </div>
    )
}

export default Signup