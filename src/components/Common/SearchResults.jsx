import React from 'react';
import PropTypes from 'prop-types';

import { Labels } from './';

const SearchResults = ({showResults, searchData}) =>
    <div hidden={showResults} className="search-results-container">
        <ul>
            {
                searchData.length > 0
                    ? searchData.map((locations, index) => (
                        <div key={index}>
                            <Labels locations={locations}/>
                        </div>
                    ))
                    :null
            }
        </ul>
    </div>;

    SearchResults.propTypes = {
        searchData: PropTypes.array.isRequired,
        showResults: PropTypes.bool.isRequired
    };

export default SearchResults