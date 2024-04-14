import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import Login from './Login';

const Signup = ({ onClose }) => {
  const modalRef = useRef();
  const [showModel, setShowModel] = useState(false);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5'>
        <div className='bg-gray-900 rounded-xl px-20 py-6 flex flex-col gap-2 items-center mx-4  w-100 max-w-lg'> {/* Adjusted max-w-4xl */}
          <button onClick={onClose} className='place-self-end text-white'><X size={30} /></button>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-200">Create an account</h2>
          </div>
          <div className="mt sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-900 py-8 px-4 w-80 shadow-lg rounded-md sm:rounded-lg sm:px-10">
              <form>
                <div className="mt-">
                  <label className="block text-sm font-medium leading-5  text-gray-200" htmlFor="fullname">Full name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input className="text-black appearance-none block w-full lg:w-80 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-9" defaultValue="" id="name" name="Fullname" placeholder="Your name" required type="name" />
                    <div className="hidden-flex  absolute inset-y-0 right-0 pr-3 items-center pointer-events-none"></div>
                  </div>
                  <div className='mt-3'>
                    <label className="block text-sm font-medium leading-5  text-gray-200" htmlFor="email">Email address</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input className="text-black appearance-none block w-full lg:w-80 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-9" defaultValue="" id="email" name="email" placeholder="Your email address" required type="email" />
                      <div className="hidden-flex  absolute inset-y-0 right-0 pr-3 items-center pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium leading-5 text-gray-200" htmlFor="password">Password</label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input className="text-black appearance-none block w-full lg:w-80 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-9" id="password" name="password" placeholder="Your password" required type="password" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center"></div>
                  <div className="text-sm leading-5"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-400  flex items-start space-x-2">
                    <div><input className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600" required type="checkbox" /></div>
                    <div>
                      I accept the{' '}
                      <a className="text-primary-600 text-gray-100 hover:text-primary-700" href="/terms" target="_blank">Terms and Conditions</a>
                      .
                    </div>
                  </label>
                </div>
                <div className="mt-4">
                  <span className="block w-full rounded-md shadow-sm">
                    <button className="w-full lg:w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 transition duration-300 ease-in-out hover:bg-gray-600" type="submit">Create an account</button>
                  </span>
                  <p className="mt-4  text-sm leading-5 text-gray-300 max-w">Or <a href="#" onClick={() => setShowModel(true)} className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">login to your account</a>.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
