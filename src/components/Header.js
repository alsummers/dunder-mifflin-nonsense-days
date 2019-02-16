import React, { Component } from 'react';

const dateStyle = {
    float: 'right',
    margin: '20px',
    fontSize: '24px'
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    componentWillMount() {
        clearInterval(this.continueTime)
    }
    componentDidMount() {
        this.continueTime = setInterval(() =>
            this.dateTick(), 1000
        )
    }
    dateTick() {
        let newTime = new Date().toLocaleString()
        this.setState({
            date: newTime
        })
    }
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li><img src={this.props.logo} height='100px' alt="logo" /></li>
                    <li style={dateStyle}>{this.state.date}</li>
                </ul>
            </header>
        )
    }
}
export default Header