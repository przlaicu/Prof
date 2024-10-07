import { Component } from "react";

export default class Lifecycle extends Component {
    componentWillMount() {
        console.log("Component will mount!");
    }

    componentDidMount() {
        console.log("Component did mount.");
        this.getData();
    }

    getData = () => {
        console.log("Fetching data from server...");
    };

    render() {
        return (
            <div>
                <h3>Hello mounting methods!</h3>
            </div>
        );
    }
}
