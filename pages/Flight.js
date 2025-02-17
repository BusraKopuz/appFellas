import FlightFilters from "@/components/FlightFilters";
import { useState } from "react";
import FlightCard from "@/components/FlightCard";
import useFlightCard from "@/hooks/useFlightCard";

const Flight = () => {
  const {data: flights = [] } = useFlightCard();
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="container-fluid m-0 p-3">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div
            className="col-12 p-4"
            style={{
              background: "white",
              borderRadius: "10px",
              height: "auto",
            }}
          >
            <div
              className="row p-0 m-0"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>
                <span>
                  <i className="fa-solid fa-plane pr-2"></i>
                </span>
                <span style={{ fontSize: "15px" }}>
                  <strong>BOOK YOUR FLIGHT</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "15px" }}>
                  <button              
                    style={{
                      backgroundColor: isRoundTrip
                        ? "rgb(68,8,145)"
                        : "rgb(246,244,248)",
                      color: isRoundTrip ? "white" : "rgb(68,8,145)",
                      padding: "10px",
                      width: "110px",
                      border: "none",
                      marginRight: "5px",
                      borderRadius: "50px 0 0 50px ",
                    }}
                    onClick={() => setIsRoundTrip(true)}
                  >
                    Round trip
                  </button>
                  <button               
                    style={{
                      backgroundColor: !isRoundTrip
                        ? "rgb(68,8,145)"
                        : "rgb(246,244,248)",
                      color: !isRoundTrip ? "white" : "rgb(68,8,145)",
                      padding: "10px",
                      width: "110px",
                      borderRadius: "0 50px 50px 0",
                      border: "none",
                    }}
                    onClick={() => setIsRoundTrip(false)}
                  >
                    One way
                  </button>
                </span>
              </p>
            </div>

            <form>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "12px",
                  marginTop: "15px",
                }}
              >
                <div style={{ position: "relative", flex: "1" }}>
                  <i
                    className="fa-solid fa-plane-departure"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgb(68,8,145)",
                    }}
                  ></i>
                  <input
                    type="text"
                    disabled
                    style={{
                      width: "100%",
                      padding: "10px 10px 10px 35px",
                      border: "1px solid gray",
                      borderRadius: "25px 0 0 25px",
                    }}
                  />
                </div>

                <div style={{ position: "relative", flex: "1" }}>
                  <i
                    className="fa-solid fa-plane-arrival"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgb(68,8,145)",
                    }}
                  ></i>
                  <select
                    style={{
                      width: "100%",
                      padding: "10px 10px 10px 35px",
                      border: "1px solid gray",
                      borderRadius: "0 25px 25px 0",
                    }}
                  ></select>
                </div>

                <div style={{ position: "relative", flex: "1" }}>
                  <i 
                  className="fa-regular fa-calendar" 
                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "rgb(68,8,145)" }}>
                  </i>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "10px 10px 10px 35px",
                      border: "1px solid gray",
                      borderRadius: isRoundTrip ? "25px 0 0 25px" : "25px",
                    }}
                  />
                </div>

                { isRoundTrip && 
                <div style={{ position: "relative", flex: "1" }}>
                    <i
                    className="fa-regular fa-calendar"
                    style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "rgb(68,8,145)",
                    }}
                    ></i>
                    <input
                    type="date"
                    id="flight-schedule-select"
                    style={{
                        width: "100%",
                        padding: "10px 10px 10px 35px",
                        border: "1px solid gray",
                        borderRadius: "0 25px 25px 0",
                    }}
                    />
                </div>
                }    
              </div>
            </form>

            <div className="col p-2">
              <button
                style={{
                  background: "rgb(68,8,145)",
                  fontSize: "15px",
                  color: "white",
                  padding: "10px 20px",
                  margin: "8px",
                  borderRadius: "50px",
                  border: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                Show Flights
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FlightCard ve FlightFilters Aynı Satırda */}
      <div className="container-fluid mt-4 position-relative">
        <div className="row">
            {/* Flight Card ve Flight Filters aynı satırda */}
            <div className="col-lg-6 col-md-7 col-12 d-flex justify-content-between">
            <div className="col-lg-8 col-12">
                <FlightCard data={flights} />
            </div>
            <div className="col-lg-4 col-12">
                <FlightFilters />
            </div>
            </div>

            {/* Ek Hizmetler kısmı sağda */}
            <div
            className="col-lg-3 col-md-4 col-12 mt-4 mt-md-0"
            style={{ position: "absolute", right: "0", top: "293px" }}
            >
            <div className="row">
                <div className="col-12 image-wrapper mb-1">
                <img
                    src="images/car.jpg"
                    className="card-img-top"
                    alt="Car Rentals"
                    style={{ width: "250px", height: "250px",  objectFit: "cover" }}
                />
                <p className="p ml-4">
                    <span>
                    <i className="fa fa-car"></i>
                    </span>
                    <br />
                    <span style={{ color: "white" }}>
                    <strong>CAR RENTAL</strong>
                    </span>
                </p>
                </div>

                <div className="col-12 image-wrapper mb-3">
                <img
                    src="images/hotel.jpg"
                    className="card-img-top"
                    alt="Hotels"
                    style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
                <p className="p ml-4">
                    <span>
                    <i className="fa-solid fa-hotel"></i>
                    </span>
                    <br />
                    <span style={{ color: "white" }}>
                    <strong>HOTELS</strong>
                    </span>
                </p>
                </div>

                <div className="col-12 image-wrapper mb-3">
                <img
                    src="images/packages.jpg"
                    className="card-img-top"
                    alt="Travel Packages"
                    style={{ width: "250px", height: "250px", objectFit: "cover" }}
                />
                <p className="p ml-4">
                    <span>
                    <i className="fa-solid fa-umbrella-beach"></i>
                    </span>
                    <br />
                    <span style={{ color: "white" }}>
                    <strong>TRAVEL PACKAGES</strong>
                    </span>
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>


    </div>
  );
};

export default Flight;