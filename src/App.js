import logo from './logo.svg';

import {useEffect, useState} from "react";
import axios from "axios";
import WeatherDashBoard from "./componenets/WeatherDashBoard";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=688c270b270d0d5019eb5c314ea85d43').then(result=>setData(result.data.list));
  },[])

  return (
     <>
       <WeatherDashBoard/>
     </>
  );
};

export default App;
