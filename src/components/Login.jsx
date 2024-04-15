// import React, { useRef ,useState } from 'react';
// import { X } from 'lucide-react';
// import Signup from './Signup';
// import Forgot from './Forgot';

// const Login = ({ onClose }) => {
//   const modalRef = useRef();
//   const [showSignup, setShowSignup] = useState(false);
//   const [showForgot, setShowForgot] = useState(false);

//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onClose();
//     }
//   }

//   return (
//     <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
//       <div className='mt-10 flex flex-col gap-5'>
//         <div className='bg-gray-900 rounded-xl p-10 flex flex-col gap-6 items-center mx-4'>
//           <button onClick={onClose} className='place-self-end text-white'><X size={30} /></button>
//           <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
//             <h2 className="mt-0 text-center text-2xl leading-9 font-bold text-gray-200">Login to your account</h2>
//           </div>
//           <div className="mt- sm:mx-auto sm:w-full sm:max-w-2xl">
//             <div className="bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
//               <form>
//                 {/* Input fields */}
//                 <div>
//                   <label className="block text-sm font-medium leading-5 text-gray-200" htmlFor="email">Email address</label>
//                   <div className="mt-1 relative rounded-md shadow-sm">
//                     <input className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-8" defaultValue="" id="email" name="email" placeholder="Your email address" type="email" />
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium leading-5 text-gray-200" htmlFor="password">Password</label>
//                   <div className="mt-1 rounded-md shadow-sm">
//                     <input className="text-black appearance-none block w-full lg:w-80 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-9" id="password" name="password" required type="password" placeholder="Your password" />
//                   </div>
//                 </div>
//                 {/* Forgot password link */}
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="text-sm leading-5">
//                     <a onClick={() => setShowForgot(true)} className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150" href="#">
//                       Forgot your password?
//                       {showForgot && <Forgot onClose={() => setShowForgot(false)} />}
//                     </a>
//                   </div>
//                 </div>
//                 {/* Sign in button */}
//                 <div className="mt-6">
//                   <span className="block w-full rounded-md shadow-sm">
//                     <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 transition duration-300 ease-in-out hover:bg-gray-600" type="submit">Sign in</button>
//                   </span>
//                 </div>
//                 {/* Sign up link */}
//                 <p className="text-sm mt-5 text-gray-100">Don't have an account yet?
//                   <a href="#!" className="font-medium ml-3 text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => setShowSignup(true)}>Sign up</a>
//                   {showSignup && <Signup onClose={() => setShowSignup(false)} />}
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
