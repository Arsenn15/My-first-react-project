import React, {Component} from 'react';

class MaximumInput extends Component {

    render() {
        const {handelMaximumCount} = this.props;
        return (
            <div>
                <label htmlFor="maximum">Max</label>
                <input
                    type="number"
                    id='maximum'
                    placeholder='max...'
                    onChange={e => handelMaximumCount(e)}/>
            </div>
        );
    }
}

export default MaximumInput;