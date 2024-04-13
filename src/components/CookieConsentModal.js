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
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="relative bg-white p-8 rounded-lg z-50">
            <h2 className="text-2xl font-bold text-black mb-4">Cookie Policy</h2>
            <p className="mb-4 text-black">This website uses cookies to ensure you get the best experience.</p>
            <div className="flex text-center text-[9px] mt-2 gap-2 py-2">
              {/* <span className="ltr:mr-4 ltr:last:mr-0 rtl:ml-4 rtl:last:ml-0">
                <a
                  className="no-underline cursor-pointer shrink-0"
                  href="/terms"
                  style={{
                    borderBottom: '1px solid rgb(89, 79, 253)',
                    color: 'rgb(89, 79, 253)'
                  }}
                  target="_blank"
                >
                  Privacy policy
                </a>
              </span> */}
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
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={acceptCookies}>Accept</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentModal;
