"use client";
import { API_SIGNUP } from "@/constants/api";
import { useLoading } from "@/contexts/LoadingContext";
import useAuthStore from "@/lib/authStore";
import apiService from "@/utils/apiService";
import { errorMessage, successMessage } from "@/utils/toastMessages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Signup = () => {
  const router = useRouter();
  const { setUserAuthentication, isAuth } = useAuthStore();
  const { loading, setLoading } = useLoading();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAndConditions: false,
  });

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    const newValue = e.target.type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.termsAndConditions === false) {
      errorMessage("Please accept the terms and conditions.");
      return;
    }
    setLoading(true);
    try {
      const result = await apiService.post(API_SIGNUP, formData);
      if (result.ok) {
        successMessage("Your account has been successfully created.");
        setUserAuthentication(result?.data?.data);
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
      <div className="bg-gray-900 rounded-xl px-16 py-12 flex flex-col gap-2 items-center mx-4 max-w-xl w-full">
        <h2 className="text-2xl text-center font-bold pb-5 text-white">
          Create An Account
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="bg-gray-100 text-base py-3 px-6 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              value={formData.name}
              onChange={handleChange}
              name="name"
              id="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="email"
            >
              Your Email
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
          {/* Other form fields */}
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="password"
            >
              Your Password
            </label>
            <input
              className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              value={formData.password}
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Your password"
              required
              type="password"
            />
          </div>
          {/* Terms and conditions checkbox */}
          <div className="flex flex-col space-y-2 mb-3">
            <label className="font-medium text-gray-400 flex items-start space-x-2">
              <span>
                <input
                  className="h-4 w-4  rounded-md border-spacing-2 border-gray-300 focus:ring-indigo-500 text-indigo-600"
                  type="checkbox"
                  checked={formData.termsAndConditions}
                  onChange={handleChange}
                  name="termsAndConditions"
                  id="termsAndConditions"
                  required
                />{" "}
                I accept the{" "}
                <Link
                  className="text-primary-600 text-gray-100 hover:text-primary-700 underline"
                  href="/terms"
                >
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              {loading ? "Creating ..." : "Create an account"}
            </button>
          </div>
          {/* Sign-in link */}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="/login"
            >
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
