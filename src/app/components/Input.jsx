import React from 'react';


const Input = ({
   handleChange,
   searchData,
   handleOnFocus,
   handleOnBlur,
   showResults}) => {
    return (
        <React.Fragment>
            <input
                type="text"
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleChange}
            />
            <div hidden={showResults}>
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


        </React.Fragment>
    )
};

export default Input