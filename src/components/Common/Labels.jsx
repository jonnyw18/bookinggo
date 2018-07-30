import React from 'react';
import PropTypes from 'prop-types';

const Labels = ({ locations }) => {
    switch( locations.placeType ) {
        case "A":
            return (
                <div className="label-container">
                    <div className="autocomplete-tag">
                        <span id="airport">Airport</span>
                    </div>
                    <div className="label-details-container">
                        <li> {locations.name} {locations.iata ? `(${ locations.iata })` : ""} </li>
                        <label
                            className="locations-label"> {locations.city ? locations.city + "," : null} {locations.country} </label>
                    </div>
                </div>
            );
        case "C":
            return (
                <div className="label-container">
                    <div className="autocomplete-tag">
                        <span id="city">City</span>
                    </div>
                    <div className="label-details-container">
                        <li> {locations.name} {locations.iata ? `(${ locations.iata})` : ""} </li>
                        <label
                            className="locations-label"> {locations.region ? locations.region + "," : null} {locations.country} </label>
                    </div>
                </div>
            );
        case "T":
            return (
                <div className="label-container">
                    <div className="autocomplete-tag">
                        <span id="station">Station</span>
                    </div>
                    <div className="label-details-container">
                        <li> {locations.name} {locations.iata ? `(${locations.iata})` : ""} </li>
                        <label
                            className="locations-label"> {locations.city}, {locations.region}, {locations.country} </label>
                    </div>
                </div>
            );
        case "D":
            return (
                <div className="label-container">
                    <div className="autocomplete-tag">
                        <span id="district">District</span>
                    </div>
                    <div className="label-details-container">
                        <li> {locations.name} {locations.iata ? `(${locations.iata})` : ""} </li>
                        <label className="locations-label"> {locations.city ? locations.city + ',' : null} {locations.region}, {locations.country} </label>
                    </div>
                </div>
            );
        default:
            return (
                <div className="label-container">
                    <div className="label-details-container">
                        <li id="no-results"> {locations.name} </li>
                    </div>
                </div>
            )
    }
};

Labels.propTypes = {
    locations: PropTypes.object.isRequired
};

export default Labels