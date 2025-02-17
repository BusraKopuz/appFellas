import { useState } from "react";
import FlightDetailsModal from "./FlightDetailsModal"; // Modal bileşenini içe aktar

// const flights = [
//   {
//     id: 1,
//     from: "Milano",
//     to: "Madrid",
//     departureTime: "7:30 AM",
//     actualLandingTime: "9:55 AM",
//     airportFrom: "MXP",
//     airportTo: "MAD",
//     price: "$2000",
//     tripType: "Round Trip",
//   },
//   {
//     id: 2,
//     from: "Milano",
//     to: "Madrid",
//     departureTime: "7:30 AM",
//     actualLandingTime: "9:55 AM",
//     airportFrom: "MXP",
//     airportTo: "MAD",
//     price: "$2000",
//     tripType: "Round Trip",
//   },
// ];

const FlightCard = ({data}) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  
  return (
    <div className="flex flex-col items-start space-y-10 ml-1">    
        <div
          className="relative bg-white shadow-md rounded-lg p-6 w-[600px] h-[220px] flex justify-between items-center border"
        >
          {/* Sol Taraf - Kalkış Bilgisi */}
          <div className="text-left space-y-2">
            <p className="text-lg font-semibold">{data.flightName}</p>
            <p className="text-sm text-gray-600 flex items-center">
              <i className="fa-solid fa-plane-departure text-purple-700 mr-2"></i> Departure
            </p>
            {/* <p className="text-lg font-semibold">{flight.departureTime}</p> */}
            <p className="text-sm">Airport: {data.flightNumber}</p>
          </div>

          {/* Orta - Uçuş Süresi ve İkon */}
          <div className="text-center">
            <p className="text-sm font-semibold mb-1">2h 25m (Nonstop)</p>
            <i className="fa-solid fa-plane text-purple-700 text-2xl"></i>
          </div>

          {/* Sağ Taraf - Varış Bilgisi */}
          <div className="text-right space-y-2">
            {/* <p className="text-lg font-semibold">{flight.to}</p> */}
            <p className="text-sm text-gray-600 flex items-center justify-end">
              <i className="fa-solid fa-plane-arrival text-purple-700 mr-2"></i> Arrival
            </p>
            <p className="text-sm">Airport: {data.arrival}</p>
            <p className="text-lg font-semibold">{data.actualArrival}</p>
          
          </div>

          {/* Alt Kısım - Fiyat ve Butonlar */}
          <div className="absolute bottom-1 left-6 flex flex-col items-start space-y-2">
            <p className="font-bold text-purple-700 text-md">Price:$2000</p>
            <p className="text-sm text-gray-700 font-small">Round Trip</p>
            <button
              className="text-purple-700 text-sm px-4 rounded-md bottom-1"
              style={{backgroundColor: "rgb(174, 171, 177);"}}
              onClick={() => setSelectedFlight(data)}
            >
              Check Details
            </button>
          </div>

          {/* Sağ Alt Köşe - Book Flight Butonu */}
          <div className="absolute bottom-1 right-3">
            <button
              className="text-white text-md px-5 py-2 rounded-md"
              style={{ backgroundColor: "rgb(68,8,145)" }}
            >
              Book Flight
            </button>
          </div>
        </div>

      {selectedFlight && <FlightDetailsModal selectedFlight={selectedFlight} />}
    </div>
  );
      
     
};

export default FlightCard;
  

