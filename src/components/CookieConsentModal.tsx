"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CookieConsentModal = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookie_consent");
    if (!hasAcceptedCookies) {
      setConsentGiven(false);
    } else {
      setConsentGiven(true);
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

  return (
    <>
      {!consentGiven && (
        <div className="pointer-events-none fixed inset-x-0  bottom-0 z-50">
          <div className="pointer-events-auto w-full bg-gray-800 text-white p-6 shadow-lg ring-2">
            <p className="text-sm leading-6">
              This website uses cookies to supplement a balanced diet and
              provide a much deserved reward to the senses after consuming bland
              but nutritious meals. Accepting our cookies is optional but
              recommended, as they are delicious. See our{" "}
              <Link
                href="/terms"
                className="no-underline cursor-pointer shrink-0 text-blue-500 "
              >
                Cookie policy
              </Link>
              .
            </p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentModal;
