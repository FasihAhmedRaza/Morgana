"use client";
import { API_SUBSCRIPTION } from "@/constants/api";
import { PAYPAL_SUBSCRIPTION_PLANS } from "@/constants/plans";
import apiService from "@/utils/apiService";
import { errorMessage } from "@/utils/toastMessages";
import { useEffect, useState } from "react";
import useAuthStore from "../lib/authStore";

const Services = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { isAuth: isAuthFromStore, accessToken, userData } = useAuthStore();

  useEffect(() => {
    setIsAuth(isAuthFromStore);
  }, [isAuthFromStore]);

  const handleOnClick = async (e: any, pId: string) => {
    if (isAuth) {
      try {
        const result = await apiService.get(
          `${API_SUBSCRIPTION}?planId=${pId}`,
          {
            token: accessToken,
          }
        );
        if (result.ok) {
          window.location.href = result?.data?.data["links"][1]?.href;
        } else {
          errorMessage(result.response.message);
        }
      } catch (error) {
        errorMessage(error);
      }
    }
  };

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Simple, transparent pricing for your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(PAYPAL_SUBSCRIPTION_PLANS).map((planKey) => {
            const plan = PAYPAL_SUBSCRIPTION_PLANS[planKey];
            return (
              <div
                key={plan.id}
                className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {planKey.charAt(0).toUpperCase() + planKey.slice(1)}
                  </h3>
                  <p className="mt-4 text-gray-400">
                    {planKey === "starter"
                      ? "One-Time Appointment"
                      : "Up to 5 appointments/30 day billing period"}
                  </p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">
                    ${plan.price}
                  </span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>
                      {planKey === "starter"
                        ? "Pay Once for a half hour Appointment"
                        : "Up to five half-hour"}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Video Appointments</span>
                  </li>
                  {planKey !== "starter" && (
                    <li className="flex items-center">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>30 day period</span>
                    </li>
                  )}
                </ul>
                <button
                  onClick={(e) => handleOnClick(e, plan.id)}
                  id={planKey}
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  disabled={userData?.currentSubscription?.planId === plan.id}
                >
                  {userData?.currentSubscription?.planId === plan.id
                    ? "Active Plan"
                    : isAuth
                    ? "Get Started"
                    : "Login to Get Started"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
