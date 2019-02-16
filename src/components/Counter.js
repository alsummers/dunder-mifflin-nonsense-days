import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            start: '',
            counter: 0
        }
        this.dayCounter = this.dayCounter.bind(this)
        this.fetchArticles = this.fetchArticles.bind(this)
    }
    componentDidMount() {
        this.fetchArticles()
    }
    fetchArticles() {
        fetch('https://newsapi.org/v2/everything?q=dunder%20mifflin&apiKey=6dcf55985cc74c36bd462ee31cd2396f')
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data.articles)
                let response = data.articles[19].publishedAt
                // let source = response.articles
                response = new Date(response).toLocaleDateString()
                this.setState({
                    start: response
                })
                return this.state.start
            }).then((start) => {
                this.dayCounter(start)

            })
    }
    dayCounter(startDay) {
        let then = startDay
        let date = new Date(then)
        let now = new Date()
        let difference = now - date
        let millisecondsPerDay = 24 * 60 * 60 * 1000
        let daysSince = Math.floor(difference / millisecondsPerDay)
        this.setState({
            counter: daysSince
        })
    }
    render() {
        return (
            <div className="Counter">
                <div className="container">
                    <div className="blackboard">
                        <div className="writing">
                        <div className="line">
                            <div className="days">
                            {this.state.counter} 
                            </div>
                            Days
                            </div>
                             Since Our Last Nonsense
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter