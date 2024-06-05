import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      setCurrentTime(time.toLocaleTimeString());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLatitude(28.6139);
      setLongitude(77.209);
    }

    // Get the current device location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  // Function to fetch weather
  const fetchData = async () => {
    try {
      // Fetch weather based on latitude and longitude
      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e1954291b049441b0e6499dc9bd4042a`
      );
      const dataWeather = await responseWeather.json();
      const weatherDescription = dataWeather.weather[0].description;
      const temp = dataWeather.main.temp;
      const icon = dataWeather.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
      const weatherObj = { weatherDescription, temp, iconUrl };
      setWeather(weatherObj);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component mounts or when latitude or longitude changes
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchData();
    }
  }, [latitude, longitude]);

  return (
    <footer className="flex flex-col md:flex-row p-3 justify-between items-center bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-center">
      <p className="flex gap-2 items-center text-lg">
        <FaClock />
        {currentTime}
      </p>
      <p className="dark:text-red-400">
        <span className="font-semibold text-lg dark:text-gray-200">
          Don't hesitate to get in touch
        </span>
        <br />
        &copy; {new Date().getFullYear()} Akshat Jain. All Rights Reserved.
      </p>
      <p className="flex items-center">
        {weather.weatherDescription} , {Math.floor(weather.temp - 273.15)}&deg;
        <img src={weather.iconUrl} alt="Weather Icon" />
      </p>
    </footer>
  );
};

export default Footer;
