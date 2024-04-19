"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CookieConsentModal = () => {
  const [consentGiven, setConsentGiven] = useState(true);
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    functional: true,
    analytics: false,
  });

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookie_consent");
    if (!hasAcceptedCookies) {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "all");
    setConsentGiven(true);
  };

  const handleNecessaryCookies = () => {
    localStorage.setItem("cookie_consent", "selected");
    setConsentGiven(true);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleConfirmChoices = () => {
    localStorage.setItem("cookie_consent", "user_selected");
    setShowCustomize(false);
    setConsentGiven(true);
  };

  const handleCheckboxChange = (cookieType: any) => {
    if (cookieType === "functional") return;

    setSelectedCookies((prevSelectedCookies: any) => ({
      ...prevSelectedCookies,
      [cookieType]: !prevSelectedCookies[cookieType],
    }));
  };

  return (
    <>
      {!consentGiven && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="w-full bg-gray-800 text-white p-6 shadow-lg ring-2">
            <p className="text-sm leading-6">
              Our website uses cookies for analytics and personalization
              purposes to enhance user experience and improve our services. By
              continuing to use the site, you consent to the use of these
              cookies. See our{" "}
              <Link href="/terms" className="no-underline cursor-pointer shrink-0 text-blue-500 ">
                Cookie policy
              </Link>
              .
            </p>
            {!showCustomize ? (
              <div className="mt-4 flex items-center gap-x-5">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 px-4 py-2.5 text-center leading-5"
                  onClick={handleAcceptCookies}
                >
                  Accept all
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 px-4 py-2.5 text-center leading-5"
                  onClick={handleNecessaryCookies}
                >
                  Necessary cookies only
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 px-4 py-2.5 text-center leading-5"
                  onClick={handleCustomize}
                >
                  Customize settings
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-sm leading-6 mb-2">Customize cookies:</p>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={selectedCookies.functional}
                    onChange={() => handleCheckboxChange("functional")}
                    disabled
                  />
                  <label htmlFor="functional" className="ml-2">
                    Functional cookies (Always active)
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={selectedCookies.analytics}
                    onChange={() => handleCheckboxChange("analytics")}
                  />
                  <label htmlFor="analytics" className="ml-2">
                    Analytics cookies
                  </label>
                </div>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 px-4 py-2.5 text-center leading-5 mr-2 mb-2"
                  onClick={handleConfirmChoices}
                >
                  Confirm my choices
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 px-4 py-2.5 text-center leading-5"
                  onClick={handleNecessaryCookies}
                >
                  Necessary cookies only
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentModal;
