import React from "react";
const Global = ({ globalData, countriesData }) => {
  const NewConfirmed = globalData && globalData.NewConfirmed;
  const NewDeaths = globalData && globalData.NewDeaths;
  const TotalConfirmed = globalData && globalData.TotalConfirmed;
  const TotalDeaths = globalData && globalData.TotalDeaths;

  // console.log(countriesData[0].ID); gives ID as output

  return (
    <>
      <article className="global" style={{ marginTop: "2rem" }}>
        <h3>Global Stats</h3>
        <div className="global-data">
          <h4>NewConfirmed Cases: {NewConfirmed}</h4>
          <h4>NewDeath Cases: {NewDeaths}</h4>
          <h4>TotalConfirmed Cases: {TotalConfirmed}</h4>
          <h4>TotalDeaths Cases: {TotalDeaths}</h4>
        </div>
      </article>
    </>
  );
};

export default Global;
