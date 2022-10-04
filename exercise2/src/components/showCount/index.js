import {Component} from "react";


class ShowCount extends Component{

    render() {
        const {cards} =this.props
        return(
            <div>
                {cards.map(card =>
                    <ul key = { card.id }>
                        <li className={"card-count"} >
                            {card.name} unmounted <span> {Math.ceil(card.count/2)} </span>
                            {card.count <= 2 ? 'time' : 'times'}
                        </li>
                    </ul>)}
            </div>
        )
    }
}

export default ShowCount