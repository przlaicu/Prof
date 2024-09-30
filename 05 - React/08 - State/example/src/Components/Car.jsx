import { Component } from "react";

export default class Car extends Component {
    state = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        year: 1964
    }

    changeState = () => {
        console.log('Application state changed!');
        this.setState({ model: 'Fiesta', color: 'blue', year: 2021 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>The selected car is {this.state.brand} {this.state.model} from {this.state.year}. The color of the car is {this.state.color}.</p>
                <button onClick={this.changeState}>Change the car</button>
            </div>
        )
    }
}