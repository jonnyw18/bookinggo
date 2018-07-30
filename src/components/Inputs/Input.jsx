import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from "../";

const Input = ({
   handleChange,
   handleOnFocus,
   handleOnBlur,
   userInput,
   loading
}) =>
    <div className="search-container">
        <h2> Let's find your ideal car </h2>
        <label> Pick-up Location </label>
        <div className="input-container">
            <input
                id="locations-input"
                type="text"
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleChange}
                placeholder={
                    window.innerWidth < 600
                        ? "e.g. town, city or airport"
                        : "city, airport, station, region, district…"
                }
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
    </div>;

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleOnFocus: PropTypes.func.isRequired,
    handleOnBlur: PropTypes.func.isRequired,
    userInput: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
};

export default Input