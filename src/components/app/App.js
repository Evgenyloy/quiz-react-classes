import { Component } from 'react'
import './App.css'
import questions from '../data/questions'
import Quiz from '../quiz/Quiz'
import Result from '../results/Results'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      questionIndex: 0,
      questionId: '',
    }
  }

  chengeValue = (e) => {
    this.setState({ questionId: e.target.id })
  }

  onNextQuestion = (e) => {
    if (this.state.questionId === '') return

    this.setState({
      questionIndex: this.state.questionIndex + 1,
    })

    if (this.state.questionId == questions[this.state.questionIndex].correct) {
      this.setState({ score: this.state.score + 1 })
    }

    this.setState({ questionId: '' })
  }

  onStartOver = () => {
    if (this.state.questionIndex === 5) {
      this.setState({ score: 0 })
      this.setState({ questionIndex: 0 })
    }
  }

  render() {
    const { questionIndex, score } = this.state
    return (
      <div className="quiz">
        {questionIndex < 5 ? (
          <Quiz state={this.state} chengeValue={this.chengeValue} />
        ) : (
          <Result score={score} />
        )}

        <button
          className="quiz__button"
          type="submit"
          onClick={questionIndex === 5 ? this.onStartOver : this.onNextQuestion}
        >
          {questionIndex === 5 ? 'Start over' : 'Next question'}
        </button>
      </div>
    )
  }
}

export default App
