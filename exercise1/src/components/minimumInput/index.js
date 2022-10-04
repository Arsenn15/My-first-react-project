import React, {Component} from 'react';

class MinimumInput extends Component {

    render() {
        const {handelMinimumCount} = this.props;
        return (
            <div>
                <label htmlFor="minimum">Min</label>
                <input id='minimum' placeholder='min...'
                       onChange={(e) => handelMinimumCount(e)} type="number"/>
            </div>
        )
    }
}

export default MinimumInput;