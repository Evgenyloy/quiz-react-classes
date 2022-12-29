import questions from '../data/questions'

const Result = ({ score }) => {
  let title, message

  if (score === questions.length) {
    title = 'Congratulations!'
    message = 'You answered all questions correctly!'
  } else if ((score * 100) / questions.length >= 50) {
    title = 'Not a bad result!'
    message = 'You have given more than half of the correct answers!'
  } else {
    title = 'Worth a try!'
    message = 'Your answers are less than half correct!'
  }

  return (
    <>
      <div className="title">{title}</div>
      <div className="message">{message}</div>
      <div className="result">{score} out of 5</div>
    </>
  )
}

export default Result
