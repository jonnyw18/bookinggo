import React from 'react';

const SearchResults = ({searchData, showResults}) =>
    <div hidden={showResults} className="test-scss">
        <ul>
            {
                searchData.length > 0
                    ? searchData.map((locations, index) => (
                        locations.city
                            ? <div key={index}>
                                <li> {locations.city} </li>
                              </div>
                            : <div key={index}>
                                <li key={index}> {locations.name} </li>
                              </div>
                    ))
                    : null
            }
         </ul>
    </div>;

export default SearchResults