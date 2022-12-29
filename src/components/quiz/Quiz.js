import questions from '../data/questions'

const Quiz = ({ state, chengeValue }) => {
  const { questionIndex, questionId } = state

  const answerData = [
    { id: '1', answer: 0 },
    { id: '2', answer: 1 },
    { id: '3', answer: 2 },
    { id: '4', answer: 3 },
  ]

  const answer = answerData.map(({ id, answer }, index) => {
    return (
      <li className="quiz__answer-item" key={index}>
        <input
          className="quiz__radio"
          type="radio"
          id={id}
          name="quiz"
          onChange={chengeValue}
          checked={questionId === id}
          value={id}
          key={id}
        />
        <label className="quiz__input-text" htmlFor={id} key={answer}>
          {questions[questionIndex].answer[answer]}
        </label>
      </li>
    )
  })

  return (
    <>
      <div className="quiz__header">
        <div className="quiz__question">
          {questions[questionIndex]['question']}
        </div>
      </div>
      <ul className="quiz__answers">{answer}</ul>
    </>
  )
}

export default Quiz
