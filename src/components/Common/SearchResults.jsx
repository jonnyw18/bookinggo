import React from 'react';
import PropTypes from 'prop-types';

import { Labels } from './';

const SearchResults = ({
   hideResults,
   searchData,
   getSelectedLocation
}) =>
    <div hidden={hideResults} className="search-results-container">
        <ul>
            {
                searchData.length > 0
                    ? searchData.map((locations, index) => (
                        <div key={index} onClick={() => getSelectedLocation(locations)}>
                            <Labels locations={locations} />
                        </div>
                    ))
                    :null
            }
        </ul>
    </div>;


    SearchResults.propTypes = {
        searchData: PropTypes.array.isRequired,
        hideResults: PropTypes.bool.isRequired
    };

export default SearchResults