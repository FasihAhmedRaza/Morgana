"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountriesDropdown from "./CountriesDropDown";
import Table from "./Table";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    // Make API request when date is selected
    fetchData(date);
  };

  const fetchData = (date: any) => {
    axios
      .get(`your_api_endpoint?date=${date.toISOString()}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you can send selectedDate and selectedOption to the backend
    console.log("Selected Date:", selectedDate);
    console.log("Selected Option:", selectedOption);
  };

  useEffect(() => {
    // setData([
    //   { id: "1sdsd1" },
    //   { id: "1sdsd2" },
    //   { id: "1sdsd3" },
    //   { id: "1sdsd4" },
    //   { id: "1sdsd5" },
    // ]);
  });

  return (
    <div className="flex overflow-x-hidden">
      <div className="w-1/2 p-2 min-h-screen">
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
                {data?.length
                  ? "Select Time Slot"
                  : "Please pick a date to choose a time slot"}
              </label>
              {data.map((item) => (
                <div key={item.id}>
                  <input
                    type="radio"
                    id={item.id}
                    value={item.id}
                    checked={selectedOption === item.id}
                    onChange={() => handleOptionChange(item.id)}
                  />
                  <label htmlFor={item.id}>{item.id}</label>
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
                value={selectedCountry}
                onChange={handleCountryChange}
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
                defaultValue=""
                id="city"
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
                defaultValue=""
                id="address"
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
      <div className="w-1/2 p-2 min-h-screen">
        <h2 className="text-center my-2">Past Bookings</h2>
        <Table />
      </div>
    </div>
  );
};

export default Appointment;
