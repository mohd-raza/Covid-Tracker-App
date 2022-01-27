import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
const Forms = ({ placeholder, setCountry1 }) => {
  const [country, setCountry] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      setCountry1(country);
    } else if (inputRef.current.value === "") {
      alert("Please Enter The country name");
    }
    setCountry("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setCountry1("");
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="country">Enter Country:</label>
            <input
              type="text"
              id="country"
              ref={inputRef}
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder={placeholder}
            />
          </div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "2rem" }}
            onClick={(e) => handleClear(e)}
          >
            Clear
          </Button>
        </form>
      </article>
    </>
  );
};

export default Forms;
