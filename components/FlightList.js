import React from "react";
 import { isEmpty } from "lodash";
import FlightCard from "./FlightCard";

 const FlightList = ({data} ) => {
    if(isEmpty(data)) {
        return null;
    }

    return (   
       
        <div>
            {data.map((flight) =>(
                <FlightCard key={flight.id} data={flight}/>
            ))}
        </div>
        
    )
 }