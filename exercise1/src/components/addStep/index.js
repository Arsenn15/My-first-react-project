import React, {Component} from 'react';

class AddStep extends Component {

    render() {
        const {handelStepCount} = this.props;
        return (
            <div className="addStep">
                <label htmlFor="step">Step</label>
                <input
                    type="number"
                    id="step"
                    placeholder="step"
                    onChange={event => handelStepCount(event)}/>
            </div>
        );
    }
}

export default AddStep;