import React, { Component } from 'react';
import Header from './components/Header'
import Counter from './components/Counter'
import logo from './dunder-mifflin-logo-5E325D4D51-seeklogo.com.png'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date().toString()
    }
  }
  componentWillMount(){
    clearInterval(this.continueTime)
  }
  componentDidMount(){
    this.continueTime = setInterval(() =>
    this.dateTick(), 1000
    )
  }
  dateTick(){
    let newTime = new Date().toString()
    this.setState({
      date: newTime
    })
  }
  render() {
    return (
      <div className="App">
      <Header logo={logo}/>
      <Counter />
      </div>
    );
  }
}

export default App;
