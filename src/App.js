import { useState } from "react";
import axios from "axios";


function App() {

  const [evalue, setEvalue] = useState()

  const [temp, setTemp] = useState()

  const [weather, setWeather] = useState()

  const [desc, setDesc] = useState()

  const handleInputChange = (e) => {
    setEvalue(e.target.value)
  }

  const handleGetReport = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${evalue}&appid=7eacbdc936a4bbfa737eca26be6b8c57`

    const data = axios(url)

    data.then(function (response) {
      console.log(url)
      setWeather(response.data.weather[0].main)
      setTemp(response.data.main.temp)
      setDesc(response.data.weather[0].description)

    }).catch(function (error) {
      console.log("error")
    })
  }

  return (
    <div className= "flex min-h-screen w-full flex-col items-center justify-center relative bg-gradient-to-tl bg-opacity-80 bg-orange-600 from-gray-500">
      <div className="bg-white bg-opacity-20 p-12 rounded-md">
        <div className="flex flex-col gap-7">

          <div className="flex flex-col gap-3 items-center bg-orange-300 bg-opacity-20 p-10 rounded-md">
            <h1 className="text-2xl font-medium p-2">Weather Report</h1>
            <p className="font-semibold">I can give you a weather report about your city !</p>
            <input value={evalue} onChange={handleInputChange} className="p-2 w-52 rounded-md focus:outline-none" placeholder="Enter Location"></input>
            <button onClick={handleGetReport} className="p-2 bg-black shadow-md shadow-slate-800 text-white rounded-md w-28 ">Get Report</button>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <div className="bg-orange-100 shadow-lg shadow-orange-300 p-1 grow flex flex-col gap-2 items-center rounded-md">
              <h1 className="text-l font-medium">Weather</h1>
              <h1>{weather}</h1>
            </div>

            <div className="bg-orange-100 shadow-lg shadow-orange-300 p-1 grow flex flex-col  gap-2 items-center rounded-md">
              <h1 className="text-l font-medium ">Temperature</h1>
              <h1>{temp}</h1>
            </div>

            <div className="bg-orange-100 shadow-lg shadow-orange-300 p-1 grow flex flex-col gap-2 items-center rounded-md">
              <h1 className="text-l font-medium ">Description</h1>
              <h1>{desc}</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
