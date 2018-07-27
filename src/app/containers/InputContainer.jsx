import React, { Component } from 'react';
import axios from 'axios';

// Presentational component
import { Input } from '../components/';

export default class InputContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchData: []
        }
    }

    componentDidMount() {
        axios.get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${'London'}`)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({
                        searchData: response.data.results.docs
                    }, () => {
                        console.log(this.state.searchData)
                    })
                }
            }).catch((err) => console.log(err));
    }

    render() {
        return (
            <Input
                data={this.state.searchData}
            />
        )
    }
}