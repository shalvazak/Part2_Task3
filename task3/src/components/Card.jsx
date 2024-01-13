import { Component } from "react";

class CardList extends Component {
    action = () => {
        console.log("წიგნის სათაური: " + this.props.title +"; " + "პერსონაჟები: " + this.props.characters +"; ") 
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.img} />
                <div className="card-content">
                <h3>{this.props.title}</h3>
                <h5>{
                        this.props.characters.map((element, index) => {
                            return this.props.characters.length-1 === index ?  element + "."  : element + ", ";
                        })
                    }
                </h5>
                <p>{this.props.description}</p>
                <button onClick={this.action} className="btn">click me</button>
                </div>
            </div>
        )
    }
} 

export default CardList