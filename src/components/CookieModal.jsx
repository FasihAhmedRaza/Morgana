import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import Signup from './Signup';
import Forgot from './Forgot';

const CookieModal = ({ onClose }) => {
  const modalRef = useRef();
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5'>
        <div className='bg-gray-900 rounded-xl p-10 flex flex-col gap-6 items-center mx-4'>
          <button onClick={onClose} className='place-self-end text-white'><X size={30} /></button>
          <div className="max-w-full justify-center items-center mx-auto p-4 text-white dark:bg-black overflow-y-auto max-h-96">
      <h1 className="pt-10 text-3xl text-center font-bold mb-4">Morgana Holdings, LLC Terms of Service</h1>
      <p className='mt-10 text-center pb-5 text-gray-200'>Last Updated: March 31, 2024</p>
      {/* Content of your terms of service */}

</div><h2 className="text-xl font-bold mt-4">I. Use of the Website</h2>
    
    
        </div>
      </div>
    </div>

  );
}

export default CookieModal;
