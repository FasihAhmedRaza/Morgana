'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalendarModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // Reset selected time when date changes
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      console.log('Selected Date:', selectedDate);
      console.log('Selected Time:', selectedTime);
    } else {
      console.log('Please select both date and time');
    }
    // Additional logic for continuing after selecting date and time
  };

  const today = new Date();

  // Available time slots
  const timeSlots = ['4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM'];

  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
        onClick={openModal}
      >
        Let's Talk
      </button>
      {modalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="relative z-50 bg-gray-900  text-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Select Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={today}
              dateFormat="MMMM d, yyyy"
              className="border border-gray-300 rounded px-3 py-2 mb-4 bg-gray-300 text-black"
            />
            <h2 className="text-2xl font-semibold mb-4">Select Time Slot</h2>
            <div className="flex flex-wrap">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeClick(time)}
                  className={`bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 mr-4 mb-4 ${
                    selectedTime === time ? 'bg-blue-700' : ''
                  }`}
                  style={{ minWidth: '100px' }} // Ensure consistent button width
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              onClick={handleContinue}
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition mt-8 block w-full"
            >
              Continue
            </button>
            <p className="text-xs mt-2 text-center text-gray-200">Click outside the modal to close</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarModal;
