import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import Global from "./Global";
import Country from "./Countries";
import Forms from "./Forms";
const url = "https://api.covid19api.com/summary";

const Main = () => {
  const [globalData, setGlobalData] = useState("");
  const [country1, setCountry1] = useState("");
  const [userCountry, setUserCountry] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setGlobalData(response.data);
    });
  }, []);
  useEffect(() => {
    if (country1 !== "") {
      const country = globalData.Countries.filter(
        (country) => country.Country.toLowerCase() === country1.toLowerCase()
      );
      setUserCountry(country);
    } else {
      setUserCountry(globalData.Countries);
    }
  }, [globalData.Countries, country1]);
  return (
    <>
      <Title key={globalData.ID} />
      <Global globalData={globalData.Global} />
      <Forms placeholder="Enter Country Name....." setCountry1={setCountry1} />
      <Country Countries={userCountry ? userCountry : globalData.Countries} />
    </>
  );
};

export default Main;
