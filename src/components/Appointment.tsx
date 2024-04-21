"use client";

import { API_BOOKINGS_SLOTS } from "@/constants/api";
import useAuthStore from "@/lib/authStore";
import apiService from "@/utils/apiService";
import { errorMessage } from "@/utils/toastMessages";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountriesDropdown from "./CountriesDropDown";
import isAuth from "./IsAuth";
import Table from "./Table";
import { useSearchParams } from "next/navigation";

const Appointment = () => {
  const [dateTimeSlot, setDateTimeSlot] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateSet, setDataSet] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const { accessToken } = useAuthStore();
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    country: "",
    city: "",
    address: "",
    subscriptionPlanId: "",
  });

  useEffect(() => {
    setDataSet([]);
    formData.subscriptionPlanId = searchParams.get("planId") || "";
  }, [selectedDate, formData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("🚀 ~ handleChange ~ name:", formData);
  };

  const handleDateChange = async (date: any) => {
    setSelectedDate(date);
    try {
      const result = await apiService.get(
        `${API_BOOKINGS_SLOTS}?forDate=${date}`,
        {
          token: accessToken,
        }
      );
      if (result.ok) {
        setDataSet(result?.data?.data);
      } else {
        errorMessage(result.response.message);
      }
    } catch (error) {
      errorMessage(error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you can send selectedDate and selectedOption to the backend
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="flex flex-wrap overflow-x-hidden">
      <div className="w-full sm:w-1/2 p-2 min-h-screen">
        <div className="p-2">
          <div className="w-full mb-3">
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="date"
            >
              Select Appointment Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select appointment date"
              minDate={new Date()}
              wrapperClassName="w-full"
              className="bg-gray-100 text-base py-3 px-6 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                className="block py-2 text-sm font-medium leading-5 text-gray-200"
                htmlFor="name"
              >
                {dateSet?.length
                  ? "Select Time Slot"
                  : "Please pick a date to choose a time slot"}
              </label>
              {dateSet?.map((item, index) => (
                <div key={`${index}-date`}>
                  <input
                    type="radio"
                    id={`${index}-date`}
                    value={index}
                    checked={dateTimeSlot === index}
                    onChange={() => {
                      setDateTimeSlot(index);
                      const selectedSlot = dateSet[index];
                      setFormData({
                        ...formData,
                        startDate: selectedSlot.startTime,
                        endDate: selectedSlot.endTime,
                      });
                    }}
                  />
                  <label htmlFor={`${index}-date`}>
                    {item.startTime} {item.endTime}
                  </label>
                </div>
              ))}
            </div>
            {/* Other form fields */}
            <div className="mb-3">
              <label
                className="block py-2 text-sm font-medium leading-5 text-gray-200"
                htmlFor="country"
              >
                Country
              </label>
              <CountriesDropdown
                value={formData.country}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-3">
              <label
                className="block py-2 text-sm font-medium leading-5 text-gray-200"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                defaultValue={formData.city}
                onChange={handleChange}
                id="city"
                name="city"
                placeholder="Your city"
                required
                type="text"
              />
            </div>
            <div className="mb-3">
              <label
                className="block py-2 text-sm font-medium leading-5 text-gray-200"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="bg-gray-100 border border-gray-300 text-gray-900 text-base py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                defaultValue={formData.address}
                onChange={handleChange}
                id="address"
                name="address"
                placeholder="Your address"
                required
                type="text"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-7"
            >
              Continue To Payment
            </button>
          </form>
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-2 min-h-screen">
        <h2 className="text-center my-2">Past Bookings</h2>
        <Table />
      </div>
    </div>
  );
};

export default isAuth(Appointment);
