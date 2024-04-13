'use client'
import React, { useRef, useState } from 'react'
import { X } from 'lucide-react';
import Login from './Login';

const Forgot = ({ onClose }) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const [showModel, setShowModel] = useState(false);  // showModel --> Login

    return (
        <div ref={modalRef}
            onClick={closeModal}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5'>

                <div className=' bg-gray-900 rounded-xl px-20 py-6 flex flex-col gap-6 items-center mx-4'>
                    <button
                        onClick={onClose}
                        className='place-self-end text-white'><X size={30} /></button>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-0 text-center text-2xl leading-9 font-bold text-gray-200">
                            Forgot password?
                        </h2>
                        <p class="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                            Remember your password? 
                            <a href="#"
                                onClick={() => setShowModel(true)}
                                class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Login here
                                {showModel && <Login onClose={() => setShowModel(false)} />}
                            </a>
                            
                        </p>
                    </div>
                   
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <div className=" bg-gray-900 py-1 px-4 shadow sm:rounded-lg sm:px-10">
                            <form>
                                <div class="grid gap-y-4">
                                    <div>
                                        <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <input
                                                className="text-black appearance-none block w-full px-3 py-2 border
                                               border-gray-300 rounded-md placeholder-gray-400 focus:outline-none
                                                  focus:shadow-outline-blue focus:border-blue-300 transition 
                                                 duration-150 ease-in-out sm:text-sm sm:leading-8"
                                                defaultValue=""
                                                id="email"
                                                name="email"
                                                placeholder="Your email address"
                                                // required
                                                type="email"
                                            />
                        
                                        </div>
                                    
                                    </div>
                                    <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>



            </div>
        </div>


    )
}

export default Forgot