import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="search">
                    <div className="searchInputs">
                        <label htmlFor="search"></label>
                        <input onChange={handelInput}
                               value={searchInput}
                               id="search"
                               type="text"
                               placeholder={"Country..."}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;