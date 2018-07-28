import React, { Component } from 'react';
import axios from 'axios';

// Presentational component
import { Input } from '../components/';

export default class InputContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchData: [],
            userInput: ''
        }
    }

    handleChange = (event) => {
       this.setState({
           userInput: event.target.value
       }, () => {
           this.getLocation()
       })
    }

    getLocation = () => {
        axios.get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${this.state.userInput}`)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({
                        searchData: response.data.results.docs
                    })
                }
            }).catch((err) => console.log(err));
    }

    render() {
        return (
            <Input
                searchData={this.state.searchData}
                handleChange={this.handleChange}
            />
        )
    }
}