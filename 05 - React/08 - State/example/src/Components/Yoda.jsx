import { Component } from "react";

export default class Yoda extends Component {

    state = {
        name: 'Yoda'
    }

    render() {
        return <BabyYoda name={this.state.name} />
    }
}

// This is a child (stateless) component WHICH HAS NO STATE!
class BabyYoda extends Component {
    render() {
        return <h1>{this.props.name}, I am.</h1>
    }
}