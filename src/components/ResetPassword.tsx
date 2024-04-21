"use client";
import { API_RESET_PASSWORD } from "@/constants/api";
import { useLoading } from "@/contexts/LoadingContext";
import useAuthStore from "@/lib/authStore";
import apiService from "@/utils/apiService";
import { errorMessage, successMessage } from "@/utils/toastMessages";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import WithSuspenseBoundary from "./WithSuspenseBoundary";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuth } = useAuthStore();
  const { loading, setLoading } = useLoading();
  const [formData, setFormData] = useState({
    userId: searchParams.get("userId") ?? null,
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
    formData.userId = searchParams.get("userId") ?? null;
  }, [isAuth, searchParams]);

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
      const result = await apiService.post(API_RESET_PASSWORD, formData);
      if (result.ok) {
        router.push("/login");
        successMessage("Password has been successfully changed!");
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
        <h2 className="text-2xl text-center font-bold pb-5 text-white">
          Reset Password
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <input type="hidden" name="userId" value={formData.userId || ""} />
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="bg-gray-100 leading-7 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              value={formData.password}
              onChange={handleChange}
              name="password"
              id="password"
              required
              type="password"
              placeholder="New Password"
            />
          </div>
          {/* Password field */}
          <div className="mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="password"
            >
              Confirm New Password
            </label>
            <input
              className="bg-gray-100 leading-7 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              required
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
          {/* Error message */}
          <div>
            <p className="text-red-500 pb-5"></p>
          </div>
          {/* Save */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-7"
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithSuspenseBoundary(ResetPassword);
