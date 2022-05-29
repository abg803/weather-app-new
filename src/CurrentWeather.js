import React from "react";

function CurrentWeather ({
    icon, 
    cityName, 
    weekDay,
    time
}){
    return(
        <div className="p-2 flex-fill bd-highlight">
            <section className="currentWeather">
            <div className="row">
                
                {/* first column */}
                <div className="col-6">
                <div className="locationTime">
                    <img src={icon} alt="" id="icon" />
                    <h1>{cityName}</h1>
                    <h2>{weekDay} | {time}</h2>
                </div>
                </div>

                {/* second column */}
                <div className="col-6">
                
                <span className="temperature"></span>
                
                {/* temp conversion */}
                <span className="units">
                    <a href="#" id="farenheit-link" className="active">°F</a> |<a
                    href="#"
                    >°C</a
                    >
                </span>

                <ul className="otherWeatherDetails">
                    <li id="description"></li>
                    <li>Humidity: %</li>
                    <li>Wind: mph</li>
                </ul>

                </div>

                
            </div>
            </section>
      </div>
    )
};

export default CurrentWeather;