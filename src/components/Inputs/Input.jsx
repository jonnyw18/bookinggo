import React from 'react';
import { Loading } from "../index";

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

        </div>
    )
};

export default Input