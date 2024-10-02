import { Component } from "react";

// Stateful component - THIS IS A PARENT
export default class Counter extends Component {
    state = {
        count: 0
    }

    // constructor(props) {
    //     super(props)
    //     this.state = { count: 0 }
    // }

    /* The state changes (a +1 is added to the count) every time a changeState()
   method is invoked - in our case, everytime a user clicks a button */
    changeState = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                {/* Sends state to the stateless (child) component via props */}
                <ChildCounter count={this.state.count} />
                <button onClick={this.changeState}>Increase Count</button>
            </div>
        )

    }
}

// Stateless component - THIS IS A CHILD COMPONENT (ChildCounter)
function ChildCounter({ count }) {
    return (
        <div>
            <p>Number of clicks in Child Component: {count}</p>
        </div>
    )
}