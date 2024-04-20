"use client";
import { COUNTRIES } from "@/utils/countries";

const CountriesDropdown = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: any;
  className?: string;
}) => {
  const dropdownClassName = `${
    className ||
    "rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
  }`;

  return (
    <select
      value={value}
      onChange={onChange}
      className={dropdownClassName}
      required
    >
      <option value="">Select Country</option>
      {COUNTRIES.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountriesDropdown;
