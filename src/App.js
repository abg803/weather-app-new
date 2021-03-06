import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import CurrentWeather from './CurrentWeather';
import SevenDayForecast from './SevenDayForecast';
import Search from './Search';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. install axios

    // 2. fetch data from api
    const city = "New York"
    const apiKey = "eb052656b887b34b8aa3dfc39bd9f4fc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    axios
      .get(apiUrl)
      .then(response => {
        // 3. set the data to a state
        setData(response.data)
      });
  }, [])

  return (
      <div className="container">
        {!!data ?
          <>
            <div className="d-flex bd-highlight flex-wrap">
              <Search/>
              <CurrentWeather
                icon={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                cityName={data.name}
                weekDay={"Some day"}
                time={"Some Hour"}
              />
            </div>
            <SevenDayForecast/>

            <pre>
            {JSON.stringify(data, null, 2)} 
            </pre>
          
            <Footer/>
          </>
        :
        <p>loading...</p>
      }
      
      </div>
  )
}

export default App;