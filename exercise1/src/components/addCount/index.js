import {Component} from "react";

import MaximumInput from "../maximumInput/index.js";

import MinimumInput from "../minimumInput";

import AddStep from "../addStep";

class AddCount extends Component {

    constructor(props) {
        super(props)
        this.input = {
            maximum: Infinity,
            minimum: 0,
        }
        this.state = {
            count: Number(localStorage.getItem("item" )) || 0,
            maximum: Infinity,
            minimum: 0,
            step: 1,
            isDecreased: true,
            isIncreased: false,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {maximum, minimum, count, step} = this.state;

        localStorage.setItem("item", count);
        if (prevState.count !== count) {
            if( count + step > maximum ){
                this.setState({
                    isIncreased: true
                })
            }
            if(count - step < minimum) {
                this.setState({
                    isDecreased: true,
                })
            }
            if ( count === maximum) {
                this.setState({
                    isIncreased: true
                })
            }
            if( count === minimum) {
                this.setState({
                    isDecreased: true
                })
            }
        }
    }

    handelIncreaseCount = () => {
        const {count, step} = this.state;
        this.setState({
            count: count + step,
            isDecreased: false,
        });
    }

    handelDecreaseCount = () => {
        const {count, step} = this.state;

        this.setState({
            count: count - step,
            isIncreased: false,
        })
    }

    handelResetCount = () => {

        this.setState({
            count: 0
        });
    }

    handelMaximumCount = (event) => {
        const value = Number(event.target.value);
        // if(value) {
        //    this.input.maximum = value
        //    this.setState({
        //       maximum: this.input.maximum
        //    })
        // }
        this.setState({
            maximum: value,
        })
    }

    handelMinimumCount = (event) => {
        const value = Number(event.target.value);
        if(value){
            this.setState({
                minimum: value,
                count: value,
            })
        }

    }
    handelStepCount = (event) => {
        const value = Number(event.target.value);
        this.setState({
            step: value,
        })
    }



    render() {
        const {handelMaximumCount, handelMinimumCount, handelStepCount} = this;
        const {count, isDecreased, isIncreased, maximum, minimum} = this.state;
        return (
            <div className={"counter"}>
                <h1>Count</h1>
                <p>A simple counting web app</p>
                <p>Your maximum count is <span>{maximum}</span></p>
                <p>Your minimum count is <span>{minimum}</span></p>

                <div className={"counter-value"}>{count}</div>
                <div className={"counter_controls"}>
                    <button disabled={isIncreased} onClick={this.handelIncreaseCount}>Increase</button>
                    <button disabled={isDecreased} onClick={this.handelDecreaseCount}>Decrease</button>
                    <button onClick={this.handelResetCount }>Reset</button>
                </div>
                <div className={"footer"}>
                    <MaximumInput handelMaximumCount={handelMaximumCount}/>
                    <MinimumInput handelMinimumCount={handelMinimumCount}/>
                    <AddStep handelStepCount={handelStepCount}/>
                </div>
            </div>
        );

    };
}

export default AddCount;