import React, { useEffect } from "react";

const Country = ({ Countries }) => {
  useEffect(() => {
    // console.log(Countries);
    if (Countries === null) {
      alert("Enter Correct Country Name");
    }
  }, [Countries]);

  return (
    <>
      <ul className="users">
        {Countries?.map((eachCountry) => {
          const {
            ID,
            Country,
            TotalConfirmed,
            TotalDeaths,
            NewConfirmed,
            NewDeaths,
          } = eachCountry;
          return (
            <article key={ID}>
              <h4>{Country}</h4>
              <p>
                Total Confirmed Cases :{TotalConfirmed}
                <br />
                Total Deaths :{TotalDeaths}
                <br />
                New Confirmed :{NewConfirmed}
                <br />
                New Deaths :{NewDeaths}
              </p>
            </article>
          );
        })}
      </ul>
    </>
  );
};

export default Country;
