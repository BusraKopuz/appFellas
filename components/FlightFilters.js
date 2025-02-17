import React, { useState } from 'react';

const FlightFilters = () => {
  const [sortBy, setSortBy] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [stops, setStops] = useState('');
  const [airline, setAirline] = useState('');

  return (
    <div className="filter-section p-4 space-y-4 max-w-xs overflow-y-auto" style={{ maxWidth: '320px', minHeight: '500px', maxHeight: '500px' }}>
      <div className="form-group mb-4">
        <label className="block text-sm font-semibold mb-1">Sort by:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
          <option value="Earliest Arrival">Earliest Arrival</option>
        </select>
      </div>

      <div className="form-group mb-4">
        <label className="block text-sm font-semibold mb-1">Arrival Time</label>
        {["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"].map((time, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              id={`arrival${index}`}
              name="arrival"
              className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              value={time}
              checked={arrivalTime === time}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
            <label className="ml-2 text-gray-700 text-sm" htmlFor={`arrival${index}`}>
              {time}
            </label>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="mb-4 overflow-y-auto max-h-40">
          <label className="text-sm font-semibold block mb-1">Stops</label>
          {[
            { label: "Nonstop", value: "Nonstop $230" },
            { label: "1 Stop", value: "1Stop $230" },
            { label: "2+ Stops", value: "2+Stops $230" },
          ].map((option, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="stops"
                  value={option.value}
                  checked={stops === option.value}
                  onChange={(e) => setStops(e.target.value)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition ${stops === option.value ? "border-blue-600" : "border-gray-400"}`}
                >
                  {stops === option.value && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                </span>
                {option.label}
              </label>
              <span className="text-gray-900 font-medium text-sm">{option.value.split(" ")[1]}</span>
            </div>
          ))}
        </div>

        <div className="max-h-30">
          <label className="text-sm font-semibold block mb-1">Airlines</label>
          {[
            { label: "Alitalia", value: "Alitalia $230" },
            { label: "Lufthansa", value: "Lufthansa $230" },
            { label: "Air France", value: "AirFrance $230" },
            { label: "Brussels Airlines", value: "BrusselsAirlines $230" },
            { label: "Air Italy", value: "AirItaly $230" },
            { label: "Siberia", value: "Siberia $230" },
          ].map((option, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="airline"
                  value={option.value}
                  checked={airline === option.value}
                  onChange={(e) => setAirline(e.target.value)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition ${airline === option.value ? "border-blue-600" : "border-gray-400"}`}
                >
                  {airline === option.value && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                </span>
                {option.label}
              </label>
              <span className="text-gray-900 font-medium text-sm">{option.value.split(" ")[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;
