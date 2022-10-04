import  {Component} from 'react';

class Index extends Component {

    render() {
        const {name, image} = this.props
        return (
            <div className={"photoCard"}>
                <img className={"image"} src={image} alt=""/>
                <div>{name}</div>
            </div>
        );
    }
}

export default Index