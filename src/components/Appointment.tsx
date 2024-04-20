"use client";

import { useState } from "react";
import Table from "./Table";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);
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

  return (
    <div className="flex">
      <div className="w-1/2 p-2 min-h-screen">
        <div className="p-2">
          <div className="mb-3">
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
              className="bg-gray-100 text-base py-2 px-6 border border-gray-300 leading-7 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <div>
            {data.map((item) => (
              <div key={item.id}>
                <input
                  type="radio"
                  id={item.id}
                  value={item.id}
                  checked={selectedOption === item.id}
                  onChange={() => handleOptionChange(item.id)}
                />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            ))}
          </div> */}
            <label
              className="block py-2 text-sm font-medium leading-5 text-gray-200"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="bg-gray-100 text-base py-3 px-6 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              defaultValue=""
              id="name"
              placeholder="Your Name"
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
              defaultValue=""
              id="email"
              placeholder="Your Email Address"
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
              defaultValue=""
              id="password"
              placeholder="Your Password"
              required
              type="password"
            />
          </div>
            <button type="submit">Submit</button>
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
