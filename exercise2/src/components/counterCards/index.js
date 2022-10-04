import {Component} from "react";

import ShowCard from "../showCard";

import ShowCount from "../showCount";

class CounterCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            isUnclosed: false,
        }
    }

    componentDidMount() {
        fetch("/data/cards.json")
            .then(res => res.json())
            .then(cards => this.setState({cards}))
    }

    handleCardCount = (id) => {
        const cards = this.state.cards.map(count => {
            if (count.id === id) {
                count.count++;
            }
            return count
        })
        this.setState({
            cards
        })
    }

    handleShowCardsCount = () => {
        this.setState({
            isUnclosed: !this.state.isUnclosed,
        })
    }

    render() {
        return (
            <>
                <div className={'cards-container'}>
                    {
                        this.state.cards.map(card => <ShowCard
                            handleCardCount={this.handleCardCount}
                            key={card.id}
                            id={card.id}
                            image={card.image}
                        />)
                    }
                </div>
                <button className={"container-button"} onClick={this.handleShowCardsCount}>Show Counts</button>
                { this.state.isUnclosed ? <ShowCount cards={this.state.cards}/> : "" }
            </>
        )
    }
}
export default CounterCards;