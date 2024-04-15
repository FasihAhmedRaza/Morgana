'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
    
    if (!hasAcceptedCookies) {
      setShowModal(true);
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  }, []);

  const acceptCookies = () => {
    // Set a cookie named 'acceptsCookies' with value 'true' that expires in 30 days
    const expiryDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = 'acceptsCookies=true; expires=' + expiryDate;

    // Store the user's consent in local storage
    localStorage.setItem('hasAcceptedCookies', true);

    setShowModal(false);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  return (
    <>
      {showModal && (
        <div className="fixed bottom-0 p-3 rounded-lg inset-x-0  bg-opacity-50 z-50">
          <div className="max-w-screen-xll  mx-5 w-full bg-gray-800 rounded-t-xl rounded-b-xl p-8">
            {/* <h2 className="text-2xl font-bold text-white mb-4">Cookie Policy</h2> */}
            <p className="mb-4 text-gray-200">
              This website uses cookies to enhance your browsing experience,
              analyze site traffic, and serve better user experiences. By continuing to use this site, you consent to our use of
              cookies. Learn more in our {" "}
               <Link
                href='#'
                className="no-underline cursor-pointer shrink-0 text-blue-500 "
              
              >
                 
               Cookie Policy
                
              </Link>
            </p>

            <div className=" flex gap-4">
              <button className="bg-blue-500 px-4 py-2 text-center rounded-lg transition duration-300 ease-in-out hover:bg-gray-600 text-white text-sm" onClick={acceptCookies}>
                Accept All
              </button>
              <button className="bg-blue-500 px-4 py-2 text-center rounded-lg transition duration-300 ease-in-out hover:bg-gray-600 text-white text-sm" onClick={acceptCookies}>
              Necessary cookies only
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentModal;
