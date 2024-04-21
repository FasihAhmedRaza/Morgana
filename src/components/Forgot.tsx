"use client";

import { API_FORGET_PASSWORD } from "@/constants/api";
import { useLoading } from "@/contexts/LoadingContext";
import useAuthStore from "@/lib/authStore";
import apiService from "@/utils/apiService";
import { errorMessage } from "@/utils/toastMessages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const { isAuth } = useAuthStore();
  const { loading, setLoading } = useLoading();
  const [formData, setFormData] = useState({
    email: "",
  });

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await apiService.post(API_FORGET_PASSWORD, formData);
      if (result.ok) {
        const userId: any = result?.data?.data;
        router.push(`/reset-password?userId=${userId}`);
      } else {
        errorMessage(result.response.message);
      }
    } catch (error) {
      errorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl px-16 py-14 flex flex-col gap-2 items-center mx-4 max-w-xl w-full">
        <div>
          <h2 className="text-3xl text-center font-bold pb-2">
            Forgot Password ?
          </h2>
          <p className="mt- text-sm text-center text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Login here
            </Link>
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="bg-gray-100 text-base py-3 px-6 border border-gray-300 leading-7 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              value={formData.email}
              onChange={handleChange}
              name="email"
              id="email"
              placeholder="Your email address"
              required
              type="email"
            />
          </div>

          <div className="flex items-center justify-between mt-5 mb-5">
            <button
              className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-7"
              type="submit"
              disabled={loading}
            >
              {loading ? "Reseting..." : "Reset password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
