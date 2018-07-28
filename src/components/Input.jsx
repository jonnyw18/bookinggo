import React from 'react';
import Loading from "./Loading";

const Input = ({
   handleChange,
   searchData,
   handleOnFocus,
   handleOnBlur,
   showResults,
   userInput,
   loading
}) => {
    return (
        <div className="search-container">
            <h1> Let's find your ideal car </h1>
            <label> Pick-up Location </label>
            <div className="input-container">
                <input
                    type="text"
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChange={handleChange}
                    placeholder="city, airport, station, region, district…"
                />
                <div className="loading-spinner-container">
                    {
                        userInput.length > 1
                            ? loading
                            ? <Loading />
                            : null
                            : null
                    }
                </div>

            </div>
            <div hidden={showResults} className="test-scss">
                {
                    searchData.length > 0
                        ? searchData.map((locations, index) => (
                            locations.city
                                ? <p key={index}> {locations.city} </p>
                                : <p key={index}> {locations.name} </p>
                        ))
                        : null
                }
            </div>
        </div>
    )
};

export default Input