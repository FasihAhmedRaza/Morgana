"use client";

import CountriesDropdown from "@/components/CountriesDropDown";
import { errorMessage, successMessage } from "@/utils/toastMessages";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { useState } from "react";
import { sendEmail } from "../../../actions/sendEmail";
function ContactUs() {
  // const [name, setName] = useState("");
  // const [organization, setOrganization] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Submitted:", {
  //     name,
  //     address,
  //     city,
  //     state,
  //     country,
  //     email,
  //     message,
  //   });
  // };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const { data, error } = await sendEmail(formData);

    if (error) {
      errorMessage(error);
      setIsSubmitting(false);
      return;
    }

    successMessage("Your message has been successfully sent!");
    router.push("/");
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
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <input
            type="text"
            name="organization"
            placeholder="Your organization (if applicable)"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
          <input
            type="text"
            name="address"
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
              name="city"
              placeholder="City"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
          </div>

          <input
            name="senderEmail"
            type="email"
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            maxLength={5000}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-gray-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
