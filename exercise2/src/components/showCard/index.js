import {Component} from "react";

class ShowCard extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isClosedCards: false,
        }
    }

    handleDelete = (id) => {
        this.props.handleCardCount(id)
        this.setState({
            isClosedCards: !this.state.isClosedCards,
        })
    }

    render() {
        const {id, image } = this.props;

        return (
            <>
                {
                    this.state.isClosedCards
                        ?
                        <div className={"container"}>
                            <button onClick={() => this.handleDelete(id)} className={"container-button"}>show</button>
                        </div>
                        :
                        <div className={"container"}>
                            <img  className={"card-image"} src={image} alt=""/>

                            <img
                                onClick={()=> this.handleDelete(id) }
                                className={"container-icon"}
                                src="/images/eye-icon-close.jpg"
                                alt="no image"/>
                        </div>
                }
            </>
        );
    }
}

export default ShowCard;