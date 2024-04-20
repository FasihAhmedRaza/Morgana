"use client";

import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/2 min-h-screen">
        {/* Appointments */}
      </div>
      <div className="w-1/2 min-h-screen">
        <h2 className="text-center my-2">Past Bookings</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
