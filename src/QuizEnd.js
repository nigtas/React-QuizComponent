import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'

class QuizEnd extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }

    handleResetClick() {
        this.props.resetClickHandler()
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a onClick={this.handleResetClick.bind(this)} href=''>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd
