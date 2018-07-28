import React from 'react';

// Components
import { Loading } from './';

const Input = ({handleChange, searchData}) => (
    <React.Fragment>
        <input type="text" onChange={handleChange}/>
        <div>
            {
                searchData.map((locations, index) => (
                    <p key={index}> {locations.city} </p>
                ))
            }
            <Loading />
        </div>
    </React.Fragment>
)
export default Input