import { useState } from "react"
import FeedbackGatherer from "./components/FeedbackGatherer"
import Statistics from "./components/Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGoodFeedback = () => setGood(good + 1)
  const incrementNeutralFeedback = () => setNeutral(neutral + 1)
  const incrementBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <FeedbackGatherer incrementGoodFeedback={incrementGoodFeedback} incrementNeutralFeedback={incrementNeutralFeedback} 
        incrementBadFeedback={incrementBadFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App