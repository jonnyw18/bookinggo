import React, { Component } from 'react';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { getLocations } from "../actions";

// Presentational components
import { Input, SearchResults } from '../components';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: [],
            userInput: '',
            loading: true,
            hideResults: false,
            responsiveInputClass: false,
            selectedLocation: '',
            clickedOnLocationLabel: true // set to true to ensure getSelectedLocation function fires
        }
    }

    // Input fires the onChange event when user types into the input field - function is used to create a controlled component,
    // input values are then set to local state.
    handleChange = (event) => {
       this.setState({
           userInput: event.target.value,
           loading: event.target.value.length > this.state.userInput.length
       }, () => {
           this.getLocation()
       })
    };

    // Uses a promise based HTTP client to bring in the relevant locations based on the users input.
    getLocation = () => {
        axios.get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${this.state.userInput}`)
            .then((response) => {
                if(response.status === 200) {
                    !response.data.results
                        ? this.setState({ searchData: [], loading: false })
                        : this.setState({ searchData: response.data.results.docs, loading: false })
                }
            }).catch((err) => console.log(err));
    };

    getSelectedLocation = (location) => {
        console.log(location);
        this.setState({
            hideResults: true,
            clickedOnLocationLabel: true,
            selectedLocation: location
        });
    };

    // When user clicks on input and triggers the onFocus event, search results appear.
    handleOnFocus = () => {
        if(window.innerWidth < 600 && !this.state.responsiveInputClass) {
            const inputElement = document.getElementById("locations-input");
            inputElement.className += "responsive-input";
        }

        this.setState({
            hideResults: false,
            responsiveInputClass: document.getElementById('locations-input').classList.contains('responsive-input')
        })
    };

    // When user clicks off input and fires the onBlur event, search results disappear if user hasn't clicked on location labels.
    // If user clicks on location label, selected location is passed to getSelectedLocation which will then be used to populate
    // the inputs placeholder
    handleOnBlur = () => {
        const inputElement = document.getElementById("locations-input");
        if(!this.state.clickedOnLocationLabel) {
            if(window.innerWidth < 600 && this.state.responsiveInputClass ) {
                inputElement.classList.remove("responsive-input");
            }

            this.setState({
                hideResults: true,
                loading: false,
                clickedOnLocationLabel: true,
                responsiveInputClass: document.getElementById('locations-input').classList.contains('responsive-input')
            })
        } else {
            inputElement.classList.remove("responsive-input");
            this.setState({
                hideResults: true,
                loading: false,
                clickedOnLocationLabel: true,
                responsiveInputClass: document.getElementById('locations-input').classList.contains('responsive-input')
            })
        }
    };

    render() {
        const {
            userInput,
            searchData,
            loading,
            hideResults,
            selectedLocation
        } = this.state;
        return (
            <React.Fragment>
                <Input
                    handleChange={this.handleChange}
                    handleOnFocus={this.handleOnFocus}
                    handleOnBlur={this.handleOnBlur}
                    userInput={userInput}
                    loading={loading}
                    selectedLocation={selectedLocation}
                />
                <SearchResults
                    searchData={userInput.length > 1 ? searchData : []}
                    hideResults={hideResults}
                    getSelectedLocation={this.getSelectedLocation}
                />
            </React.Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         locations: state.locations
//     }
// };
//
// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({ getLocations: getLocations }, dispatch)
// };

export default InputContainer
// connect(mapStateToProps,matchDispatchToProps)(
