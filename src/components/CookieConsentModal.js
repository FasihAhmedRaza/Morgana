'use client'
import React, { useState, useEffect } from 'react';

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
        <div className="fixed mt-48 top-0  w-full h-full flex justify-end items-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="relative bg-gray-800 p-8 rounded-lg z-50">
            <h2 className="text-2xl font-bold text-white mb-4">Cookie Policy</h2>
            <p className="mb-4 text-gray-200">This website uses cookies to ensure you get the best experience.</p>
            <div className="flex text-center text-[9px] mt-2 gap-2 py-2">

              <span className="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
                <a
                href='/terms'
                  className="no-underline cursor-pointer shrink-0"
                  style={{
                    borderBottom: '1px solid rgb(89, 79, 253)',
                    color: 'rgb(89, 79, 253)'
                  }}
                >
                  Cookie policy
                </a>
              </span>
            </div>
            <button className="bg-blue-500 px-4 py-2 text-center rounded-lg 
              transition duration-300 ease-in-out hover:bg-gray-600 text-white text-sm"
             onClick={acceptCookies}>Accept</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentModal;
