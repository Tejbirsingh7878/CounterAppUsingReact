import React from 'react'
import './counter.css'
class ClassC extends React.Component {

    constructor() {
        super();
        this.state = {
            number: 0
        }
    }
    increament = () => {
        this.setState({ number: this.state.number + 1 })
    }
    Decreament = () => {
        this.setState({ number: this.state.number - 1 })
    }

    render() {
        return <div>
            <h2>count using react state</h2>
            <h2>{this.state.number}</h2>
            <button className='b1' onClick={this.increament}>Increase</button>
            <button className='b2' onClick={this.Decreament}>decrease</button>
        </div>
    }

}
export default ClassC;