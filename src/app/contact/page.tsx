"use client";

import CountriesDropdown from "@/components/CountriesDropDown";
import { FormEvent, useState } from "react";
function MusicSchoolContactUs() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", {
      name,
      organization,
      address,
      city,
      state,
      country,
      email,
      message,
    });
    // Perform additional actions such as sending data to CRM, etc.
  };

  return (
    <div className="bg-black dark:bg-black py-12 pt-5">

      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4  mt-50">
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans mt-12 font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our Services. Reach
          out and let us know how we can assist you in your journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Your organization (if applicable)"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
          {/* COUNTRY SECTION */}
          <CountriesDropdown
            value={country}
            onChange={(e: any) => setCountry(e.target.value)}
          />
            {/* City Section */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State/Province"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-gray-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
