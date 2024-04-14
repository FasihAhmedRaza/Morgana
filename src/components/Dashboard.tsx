'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <div className="bg-gray-800 min-h-screen">
          <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
            <div className="flex items-center justify-between py-2 text-5x1">
              <div className="font-bold text-blue-900 text-xl">
                Admin
                <span className="text-orange-600">
                  Panel
                </span>
              </div>
              <div className="flex items-center text-gray-500">

                <div>
                  <div
                    className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2 cursor-pointer"
                    style={{
                      backgroundImage: 'url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)',
                    }}
                    onClick={toggleMenu}
                  />
                  {isOpen && (
                    <div className="absolute top-0 right-0 mt-14 z-10">
                      <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <a
                          className="inline-block text-gray-600 hover:text-black my-4 w-full"
                          href="#"
                        >
                          <span className="material-icons-outlined float-left pr-2">face</span>
                          Profile
                          <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                        <a
                          className="inline-block text-gray-600 hover:text-black my-4 w-full"
                          href="#"
                        >
                          <span className="material-icons-outlined float-left pr-2">settings</span>
                          Settings
                          <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                        <a
                          className="inline-block text-gray-600 hover:text-black my-4 w-full"
                          href="#"
                        >
                          <span className="material-icons-outlined float-left pr-2">power_settings_new</span>
                          Log out
                          <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-row pt-24 px-10 pb-4">

            <div className="w-10/12">
              <div className="flex flex-row">
                <div
                  className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
                  style={{
                    backgroundImage: 'url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)',
                    backgroundPosition: '90% center'
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Welcome{' '}
                    <br />
                    <strong>
                      to Morgana Holdings
                    </strong>
                  </p>
                  <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                    <strong>
                      01:51
                    </strong>
                  </span>
                </div>
                <div
                  className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
                  style={{
                    backgroundImage: 'url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)',
                    backgroundPosition: '100% 40%'
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Inbox{' '}
                    <br />
                    <strong>
                      23
                    </strong>
                  </p>
                  <a
                    className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                    href=""
                  >
                    <strong>
                      See messages
                    </strong>
                  </a>
                </div>
              </div>
              <div className="flex flex-row h-64 mt-6">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">

                  <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
                    onClick={openModal}
                  >
                    Book a Meeting
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
                              className={`bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 mr-4 mb-4 ${selectedTime === time ? 'bg-blue-700' : ''
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
                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                  b
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                  c
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Dashboard