import React, { Component } from 'react'
import Table from "./table"

class App extends Component {
    render() {
        const characters = [
            {
                name: "Lenny",
                Job: "Coder"
            },
            {
                name: "Cindy",
                Job:  "Tresury"
            },
            {
                name: "Bella",
                Job:  "Swimmer"
            },
            {
                name: "Cece",
                Job:  "Swimmer too"
            },
        ]
        return (
            <div className="container">
                <Table characterData = {characters} />
            </div>
        )
    }
}
export default App