import React, { Component } from 'react';
import axios from 'axios';

// Presentational components
import { Input, SearchResults } from '../components';

export default class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: [],
            userInput: '',
            loading: false,
            showResults: false
        }
    }
    handleChange = (event) => {
       this.setState({
           userInput: event.target.value,
           loading: event.target.value.length > this.state.userInput.length
       }, () => {
           this.getLocation()
       })
    };

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

    handleOnFocus = () => {
        this.setState({
            showResults: false
        })
    };

    handleOnBlur = () => {
        // this.setState({
        //     showResults: true,
        //     loading: false
        // })
    };

    render() {
        const {
            userInput,
            searchData,
            loading,
            showResults
        } = this.state;
        return (
            <React.Fragment>
                <Input
                    handleChange={this.handleChange}
                    handleOnFocus={this.handleOnFocus}
                    handleOnBlur={this.handleOnBlur}
                    userInput={userInput}
                    loading={loading}
                />
                <SearchResults
                    searchData={userInput.length > 1 ? searchData : []}
                    showResults={showResults}
                />
            </React.Fragment>
        )
    }
}