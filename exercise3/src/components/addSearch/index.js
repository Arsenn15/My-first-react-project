import {Component} from 'react';

import WindowCountry from "../windowCountry";

import API_URL from "../data";

class AddSearch extends Component {
    constructor() {
        super();
        this.countrySearch = [];
        this.state = {
            searchInput: "",
        }
    }

    componentDidMount() {
        fetch(API_URL).then(res => res.json())
            .then(res => {
                this.countrySearch = res;
            })
    }

    handelInput = (e) => {
        const value = e.target.value;
        this.setState({
            searchInput: value.toLowerCase(),
        })
    }

    render() {
        const {handelInput, countrySearch} = this;
        const {searchInput} = this.state;
        return (
            <div className="contener">
                <div className="search">
                    <div className="searchCoutry">
                        <label htmlFor="search"></label>
                        <input onChange={handelInput}
                               value={searchInput}
                               id="search"
                               type="text"
                               placeholder={"Country..."}
                        />
                    </div>
                </div>
                <div className="countryFlag">
                    {searchInput ? countrySearch.filter((search) => search.name.toLowerCase().includes(searchInput))
                        .map(flags => <WindowCountry key={flags.unicode} {...flags}/>) : ""}
                </div>
            </div>
        );
    }
}

export default AddSearch;