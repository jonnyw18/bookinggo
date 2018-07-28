import React from 'react';

const Input = ({
   handleChange,
   searchData,
   handleOnFocus,
   handleOnBlur,
   showResults}) => {
    return (
        <div className="search-container">
            <h1> Let's find your ideal car </h1>
            <input
                type="text"
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleChange}
            />
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