import React, { Component } from "react"

class Table extends Component {
render() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        
            <tbody>
                <tr>
                    <td>Lenny</td>
                    <td>Coder</td>
                </tr>
                <tr>
                    <td>Cindy</td>
                    <td>Tresury</td>
                </tr>
                <tr>
                    <td>Bella</td>
                    <td>4th Grader</td>
                </tr>
                <tr>
                    <td>Cece</td>
                    <td>Kindergarden</td>
                </tr>

            </tbody>
        </table>

    )
}

}

export default Table