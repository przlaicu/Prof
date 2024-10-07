import { Component } from "react";

export default class Exercise extends Component {

    state = {
        users: [
            { id: 1, name: "Pepita", years: 20 },
            { id: 2, name: "Jozefina", years: 29 },
            { id: 3, name: "Marica", years: 24 }
        ]
    }

    render() {
        return this.state.users.map(user => (
            <User key={user.id} name={user.name} years={user.years} />
        ))
    }
}

// Napravite komponentu Users koja će prikazati "Pozdrav, moje ime je ___, imam ___ godina." Komponenti će te poslati korisnike.
function User(props) {
    return <p>Pozdrav, moje ime je {props.name} i imam {props.years} godina.</p>
}