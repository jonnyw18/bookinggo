import React, { Component } from 'react';
import axios from 'axios';

// Presentational components
import { Input, Loading } from '../components/index';

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
        this.setState({
            showResults: true
        })
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
                    searchData={userInput.length > 1 ? searchData : ''}
                    showResults={showResults}
                    handleChange={this.handleChange}
                    handleOnFocus={this.handleOnFocus}
                    handleOnBlur={this.handleOnBlur}
                />
                {
                    userInput.length > 1
                        ? loading
                             ? <Loading />
                             : null
                        : null
                }
            </React.Fragment>
        )
    }
}