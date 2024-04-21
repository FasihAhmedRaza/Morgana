"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CancelComponent = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center p-8 bg-red-100 border border-red-500 rounded-md">
        <FaCheckCircle className="text-red-500 text-4xl mb-2" />
        <p className="text-lg text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default CancelComponent;
