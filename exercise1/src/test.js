import React, { Component } from 'react';
import InputsMaximum from "./components/input-max";
import InputsMinimum from "./components/input-min";
import InputStep from "./components/input-step";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            maximum: 10,
            minimum: 0,
            step: 1,
        }

        this.Settings = {
            maximum: 10,
            minimum: 0,
            step: 1
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const { count, maximum, minimum, step } = this.state;

        if ( prevState.count !== count ) {
            if (count + step > maximum) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
            }

            if ( count === minimum ) {
                this.setState({
                    isDecreaseButtonDisabled: true,
                })
            }

            if ( count === maximum ) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
            }
        }
    }

    componentDidMount() {
        const { count } = this.state;
        if (count <= 0) {
            this.setState({
                isDecreaseButtonDisabled: true
            })
        }
    }

    increaseCount = () => {
        const { count, step } = this.state;

        this.setState({
            count: count + step,
            isDecreaseButtonDisabled: false,
        })
    }

    decreaseCount = () => {

        const { count, step } = this.state;

        this.setState({
            count: count - step,
            isIncreaseButtonDisabled: false,
        })
    }

    resetCount = () => {

        this.setState({
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            settings: {
                maximum: -1,
            }
        })
    }

    setMaximum = (event) => {
        this.Settings.maximum = Number(event.target.value);
    }

    setMinimum = (event) => {
        this.Settings.minimum = Number(event.target.value);
    }

    setStep = (event) => {
        this.Settings.step = Number(event.target.value);
    }

    setSettings = () => {
        const { minimum, maximum, step } = this.Settings;
        this.setState({
            count: minimum,
            minimum,
            maximum,
            step
        })
    }

    render() {
        const { count, isDecreaseButtonDisabled, isIncreaseButtonDisabled } = this.state;
        const { increaseCount, decreaseCount, resetCount, setMaximum, setMinimum, setStep, setSettings } = this;

        return (
            <div>
                <button disabled={ isIncreaseButtonDisabled } onClick={ increaseCount }>+</button>
                <h1>{ count }</h1>
                <button disabled={ isDecreaseButtonDisabled }
                        onClick={ decreaseCount }>-</button>
                <br/>
                <InputsMaximum  setMaximum = { setMaximum }/>
                <InputsMinimum setMinimum = { setMinimum }/>
                <InputStep setStep = { setStep } />
                <br/>
                <button onClick={ setSettings } >Set Settings</button>
                <button onClick={ resetCount }>Reset</button>
            </div>
        );
    }
}

export default App;